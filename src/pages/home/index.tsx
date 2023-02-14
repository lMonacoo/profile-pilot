import GithubLogo from '../../assets/github.svg'
import { SearchInput } from '../../components/search-input'
import { OptionsUserList } from '../../components/options-user-list'
import { Container, Logo } from './styles'

export const Home = (): JSX.Element => {
  return (
    <Container>
      <Logo src={GithubLogo} alt='Github Logo' />
      <SearchInput
        placeholder='Search a user'
        onSearch={value => console.log(value)}
        optionsListComponent={<OptionsUserList isLoading={false} />}
      />
    </Container>
  )
}
