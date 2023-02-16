import { useCallback, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

import CloseIcon from '../../assets/close.svg'
import { ContainerModal, Header, ModalCloseButton, ModalStructure } from './styles'

interface PortalModalProps {
  closeModal: () => void
  showModal: boolean
  children: React.ReactNode
}

export const PortalModal = ({ closeModal, showModal, children }: PortalModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null)

  const handleClickOutsideModal = useCallback(
    (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      if (event.target === modalRef.current) closeModal()
    },
    [closeModal]
  )

  const escapeKeyHandler = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeModal()
    },
    [closeModal]
  )

  const tabKeyFocusElement = useCallback(
    (event: KeyboardEvent, firstAndLastElement: HTMLElement[]) => {
      if (event.key !== 'Tab') return

      const [firstFocusableElement, lastFocusableElement] = firstAndLastElement

      if (!event.shiftKey && document.activeElement === lastFocusableElement) {
        firstFocusableElement.focus()
        event.preventDefault()
        return
      }
      if (event.shiftKey && document.activeElement === firstFocusableElement) {
        lastFocusableElement.focus()
        event.preventDefault()
      }
    },
    []
  )

  useEffect(() => {
    if (!modalRef.current) return

    const focusableElements = modalRef.current!.querySelectorAll(
      'a[href], button:not([disabled]), textarea, input, select'
    )

    const firstElement = focusableElements[0] as HTMLElement
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement
    firstElement.focus()

    const firstAndLastElement = [firstElement, lastElement]

    document.addEventListener('keydown', (event: KeyboardEvent) =>
      tabKeyFocusElement(event, firstAndLastElement)
    )
    document.addEventListener('keydown', escapeKeyHandler)

    return () => {
      document.removeEventListener('keydown', (event: KeyboardEvent) =>
        tabKeyFocusElement(event, firstAndLastElement)
      )
      document.removeEventListener('keydown', escapeKeyHandler)
    }
  }, [escapeKeyHandler, tabKeyFocusElement])

  if (!showModal) return null

  return createPortal(
    <ContainerModal
      onClick={handleClickOutsideModal}
      ref={modalRef}
      role='dialog'
      aria-modal='true'
      data-cy='modal'
    >
      <ModalStructure>
        <Header>
          <ModalCloseButton onClick={closeModal}>
            <img src={CloseIcon} alt='Close Modal' />
          </ModalCloseButton>
        </Header>
        {children}
      </ModalStructure>
    </ContainerModal>,
    document.body
  )
}
