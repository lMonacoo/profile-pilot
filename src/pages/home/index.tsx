import { useState } from 'react'

import GithubLogo from '~/assets/github.svg'
import { AdapterUserApiResult, OptionsUserList, PortalModal, SearchInput, UserDetailed } from '~/components'
import { useFetchDetailedUser, useFetchUsers } from '~/hooks'

import { Container, Logo } from './styles'

export const Home = (): JSX.Element => {
  const [searchTerm, setSearchTerm] = useState('')
  const { users, isLoading: isUserListLoading, error: isUserListError } = useFetchUsers(searchTerm)
  const [selectedUserLogin, setSelectedUserLogin] = useState('')
  const { user, isLoading: isUserLoading, error: isUserError } = useFetchDetailedUser(selectedUserLogin)

  return (
    <Container>
      <Logo src={GithubLogo} alt='Github Logo' />

      <SearchInput
        placeholder='Search a user'
        onSearch={setSearchTerm}
        optionsListComponent={
          <AdapterUserApiResult
            isEmpty={users.length <= 0}
            isLoading={isUserListLoading}
            isError={!!isUserListError}
            isIdle={!searchTerm}
          >
            <OptionsUserList users={users} selectUser={user => setSelectedUserLogin(user.login)} />
          </AdapterUserApiResult>
        }
      />

      <PortalModal closeModal={() => setSelectedUserLogin('')} showModal={!!selectedUserLogin}>
        <AdapterUserApiResult
          isEmpty={Object.values(user || {}).length <= 0}
          isLoading={isUserLoading}
          isError={!!isUserError}
          isIdle={false}
        >
          <UserDetailed user={user!} />
        </AdapterUserApiResult>
      </PortalModal>
    </Container>
  )
}
