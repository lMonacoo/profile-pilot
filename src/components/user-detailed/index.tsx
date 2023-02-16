import BookIcon from '~/assets/book.svg'
import CompanyIcon from '~/assets/company.svg'
import GroupConnectionsIcon from '~/assets/group.svg'
import LetterIcon from '~/assets/letter.svg'
import LocationIcon from '~/assets/location.svg'
import TwitterIcon from '~/assets/twitter.svg'
import { UserDetailedModel } from '~/models'

import {
  Avatar,
  BioContent,
  ConnectionLink,
  ConnectionsContainer,
  Divisor,
  IdentityContainer,
  UserDetailedContainer,
  UserLoneAnchor,
  UserLoneInformation
} from './styles'

export const UserDetailed = ({ user }: { user: UserDetailedModel }) => (
  <UserDetailedContainer>
    <Avatar src={user.avatar_url} alt={user.login} />

    <IdentityContainer>
      <a href={user.html_url} target='_blank' rel='noopener noreferrer' title='Ver perfil no GitHub'>
        <h1>{user.name}</h1>
        <p>{user.login}</p>
      </a>
    </IdentityContainer>

    <div>
      <Divisor />

      {user.bio && (
        <BioContent>
          <h3>{user.bio}</h3>
          <Divisor />
        </BioContent>
      )}

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
        <UserLoneAnchor href={`${user.html_url}?tab=repositories`}>
          {user.public_repos} Repositórios públicos
        </UserLoneAnchor>
      </UserLoneInformation>

      <UserLoneInformation>
        <img src={LetterIcon} alt='Email Icon' />
        {user.email ? (
          <UserLoneAnchor href={`mailto:${user.email}`} title='Enviar email para o usuário'>
            {user.email}
          </UserLoneAnchor>
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
          <UserLoneAnchor
            href={`https://www.google.com/search?q=${user.company}`}
            title='Pesquisar empresa no Google'
          >
            {user.company}
          </UserLoneAnchor>
        ) : (
          'Empresa não disponível'
        )}
      </UserLoneInformation>

      <UserLoneInformation>
        <img src={TwitterIcon} alt='Twitter Icon' />
        {user.twitter_username ? (
          <UserLoneAnchor href={`https://twitter.com/${user.twitter_username}`} title='Ver perfil no Twitter'>
            {user.twitter_username}
          </UserLoneAnchor>
        ) : (
          'Twitter não disponível'
        )}
      </UserLoneInformation>
    </div>
  </UserDetailedContainer>
)
