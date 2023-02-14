import { Loader } from '../loader'
import { Avatar, Infos, Item, ListContainer, NotFound, UserSummaryButton } from './styles'

interface OptionsUserListProps {
  isLoading: boolean
}

export const OptionsUserList = ({ isLoading }: OptionsUserListProps): JSX.Element => {
  return (
    <ListContainer>
      {/* {isLoading && <Loader />} */}
      {/* <NotFound>Não foi encontrado nenhum resultado para essa busca.</NotFound> */}

      <Item>
        <UserSummaryButton>
          <Avatar src='https://avatars.githubusercontent.com/u/1164541?v=4' alt='Avatar' />
          <Infos>
            <strong>Guilherme Rodz</strong>
            <span>guilherme.rodz</span>
          </Infos>

          {/* <ProfileLink
            href=''
            target='_blank'
            rel='noopener noreferrer'
            title='Ver perfil no GitHub'
          ></ProfileLink> */}
        </UserSummaryButton>
      </Item>
    </ListContainer>
  )
}

// nome de usuário, avatar e URL de perfil.
