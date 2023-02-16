import { UserSummaryModel } from '~/models'

import { Avatar, Infos, ProfileLink, UserSummaryButton } from './styles'

interface UserSummaryProps extends UserSummaryModel {
  onClick: () => void
}

export const UserSummary = ({
  avatar_url,
  html_url,
  login,
  name,
  onClick
}: UserSummaryProps): JSX.Element => {
  return (
    <UserSummaryButton onClick={onClick}>
      <Avatar src={avatar_url} alt='Avatar' />
      <Infos>
        <strong>{name}</strong>
        <span>{login}</span>
      </Infos>

      <ProfileLink
        href={html_url}
        target='_blank'
        rel='noopener noreferrer'
        title='Ver perfil no GitHub'
      >
        Profile Link ↵
      </ProfileLink>
    </UserSummaryButton>
  )
}
