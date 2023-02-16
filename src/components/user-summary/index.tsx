import { Avatar, Infos, ProfileLink, UserSummaryButton } from './styles'

interface UserSummaryProps {
  onClick: () => void
  login: string
  avatar_url: string
  html_url: string
}

export const UserSummary = ({ avatar_url, html_url, login, onClick }: UserSummaryProps): JSX.Element => (
  <UserSummaryButton onClick={onClick}>
    <Avatar src={avatar_url} alt='Avatar' />
    <Infos>
      <strong>{login}</strong>
    </Infos>

    <ProfileLink href={html_url} target='_blank' rel='noopener noreferrer' title='Ver perfil no GitHub'>
      Profile Link ↵
    </ProfileLink>
  </UserSummaryButton>
)
