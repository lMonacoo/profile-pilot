import { UserSummary } from '~/components'
import { UserModel } from '~/models'

import { Item, ListContainer } from './styles'

interface OptionsUserListProps {
  users: UserModel[]
  selectUser: (user: UserModel) => void
}

export const OptionsUserList = ({ users, selectUser }: OptionsUserListProps): JSX.Element => {
  const handleNavigateBetweenOptions = (event: React.KeyboardEvent<HTMLUListElement>) => {
    const { key } = event
    const focusableElements = event.currentTarget.querySelectorAll('button')
    const totalElements = focusableElements.length
    const documentFocusedElement = document.activeElement as HTMLButtonElement
    const indexOfActualFocusedOption = Array.from(focusableElements).indexOf(documentFocusedElement)

    if (key === 'ArrowDown' || key === 'ArrowRight') {
      const indexOfNextFocusedOption =
        indexOfActualFocusedOption === totalElements - 1 ? 0 : indexOfActualFocusedOption + 1

      focusableElements[indexOfNextFocusedOption].focus()
    }

    if (key === 'ArrowUp' || key === 'ArrowLeft') {
      const indexOfNextFocusedOption =
        indexOfActualFocusedOption === 0 ? totalElements - 1 : indexOfActualFocusedOption - 1
      focusableElements[indexOfNextFocusedOption].focus()
    }
  }

  return (
    <ListContainer onKeyDown={handleNavigateBetweenOptions} data-cy='options-users-list'>
      {users.map(user => (
        <Item key={user.id}>
          <UserSummary onClick={() => selectUser(user)} {...user} />
        </Item>
      ))}
    </ListContainer>
  )
}
