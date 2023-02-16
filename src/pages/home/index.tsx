import { useState } from 'react'

import {
  AdapterUserApiResult,
  OptionsUserList,
  PortalModal,
  SearchInput,
  UserDetailed
} from '~/components'
import { useFetchUsers } from '~/hooks'
import { UserModel } from '~/models'

import GithubLogo from '../../assets/github.svg'
import { Container, Logo } from './styles'

export const Home = (): JSX.Element => {
  const [searchTerm, setSearchTerm] = useState('')
  const { users, isLoading, error } = useFetchUsers(searchTerm)
  const [detailedUser, setDetailedUser] = useState<UserModel | null>(null)

  return (
    <Container>
      <Logo src={GithubLogo} alt='Github Logo' />
      <SearchInput
        placeholder='Search a user'
        onSearch={setSearchTerm}
        optionsListComponent={
          <AdapterUserApiResult
            isEmpty={users.length <= 0}
            isLoading={isLoading}
            isError={!!error}
            isIdle={!searchTerm}
          >
            <OptionsUserList users={users} selectUser={user => setDetailedUser(user)} />
          </AdapterUserApiResult>
        }
      />

      <PortalModal closeModal={() => setDetailedUser(null)} showModal={!!detailedUser}>
        <UserDetailed user={detailedUser!} />
      </PortalModal>
    </Container>
  )
}
