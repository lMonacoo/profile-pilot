import { Loader } from '~/components'
import { ERROR_MESSAGE, NOT_FOUND_MESSAGE } from '~/constants'

import { Container, Message } from './styles'

interface AdapterUserApiResultProps {
  children: React.ReactNode
  isLoading: boolean
  isError: boolean
  isEmpty: boolean
  isIdle: boolean
}

export const AdapterUserApiResult = ({
  children,
  isLoading,
  isError,
  isEmpty,
  isIdle
}: AdapterUserApiResultProps): JSX.Element => {
  if (isIdle) return <></>

  if (isLoading) {
    return (
      <Container>
        <Loader />
      </Container>
    )
  }

  if (isError) {
    return (
      <Container>
        <Message data-cy='error-message'>{ERROR_MESSAGE}</Message>
      </Container>
    )
  }

  if (isEmpty) {
    return (
      <Container>
        <Message data-cy='not-found-message'>{NOT_FOUND_MESSAGE}</Message>
      </Container>
    )
  }

  return <>{children}</>
}
