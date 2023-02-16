import styled from 'styled-components'

export const ContainerModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 999;
`

export const ModalStructure = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  flex-direction: column;

  background-color: #0d1117;
  border: 1px solid #30363d;
  border-radius: 0.375rem;
`

export const Header = styled.header`
  position: relative;
  width: 100%;

  padding: 1rem 1.5rem;
  background-color: #161b22;
`

export const ModalCloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  width: 1.875rem;
  height: 1.875rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
  border-radius: 0.375rem;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: #21262d;
  }

  &:focus {
    background: #21262d;
    outline: -webkit-focus-ring-color auto 1px;
  }
`
