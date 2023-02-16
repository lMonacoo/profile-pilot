import { UserModel } from '~/models'

import BookIcon from '../../assets/book.svg'
import CompanyIcon from '../../assets/company.svg'
import GroupConnectionsIcon from '../../assets/group.svg'
import LetterIcon from '../../assets/letter.svg'
import LocationIcon from '../../assets/location.svg'
import {
  Avatar,
  BioContent,
  ConnectionLink,
  ConnectionsContainer,
  Divisor,
  IdentityContainer,
  UserDetailedContainer,
  UserEmailContainer as UserLoneInformation
} from './styles'

export const UserDetailed = ({ user }: { user: UserModel }) => (
  <UserDetailedContainer>
    <Avatar src={user.avatar_url} alt={user.login} />

    <IdentityContainer>
      <h1>{user.name}</h1>
      <p>{user.login}</p>
    </IdentityContainer>

    <Divisor />

    {user.bio && (
      <BioContent>
        <h3>{user.bio}</h3>
        <Divisor />
      </BioContent>
    )}

    <div>
      <ConnectionsContainer>
        <img src={GroupConnectionsIcon} alt='Group Connections' />
        <ConnectionLink
          href={`${user.html_url}?tab=followers`}
          target='_blank'
          rel='noopener noreferrer'
          title='Ver Seguidores no GitHub'
        >
          <strong>{user.followers}</strong> followers
        </ConnectionLink>
        {' · '}
        <ConnectionLink
          href={`${user.html_url}?tab=following`}
          target='_blank'
          rel='noopener noreferrer'
          title='Ver Seguindo no GitHub'
        >
          <strong>{user.following}</strong> following
        </ConnectionLink>
      </ConnectionsContainer>

      <UserLoneInformation>
        <img src={BookIcon} alt='Book Icon' />
        <a href={`${user.html_url}?tab=repositories`} target='_blank' rel='noopener noreferrer'>
          {user.public_repos} Repositórios públicos
        </a>
      </UserLoneInformation>

      <UserLoneInformation>
        <img src={LetterIcon} alt='Email Icon' />
        {user.email ? (
          <a href={`mailto:${user.email}`} title='Enviar email para o usuário'>
            {user.email}
          </a>
        ) : (
          'E-mail não disponível'
        )}
      </UserLoneInformation>

      <UserLoneInformation>
        <img src={LocationIcon} alt='Book Icon' />
        {user.location ? user.location : 'Localização não disponível'}
      </UserLoneInformation>

      <UserLoneInformation>
        <img src={CompanyIcon} alt='Book Icon' />
        {user.company ? (
          <a
            href={` https://www.google.com/search?q=${user.company}`}
            target='_blank'
            rel='noopener noreferrer'
            title='Pesquisar empresa no Google'
          >
            {user.company}
          </a>
        ) : (
          'Empresa não disponível'
        )}
      </UserLoneInformation>
    </div>
  </UserDetailedContainer>
)
