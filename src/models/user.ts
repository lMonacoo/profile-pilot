export interface RemoteUserSummarizedResultModel {
  incomplete_results: boolean
  items: UserSummarizedModel[]
  total_count: number
}

export interface UserSummarizedModel {
  login: string
  id: number
  node_id: string
  avatar_url: string
  gravatar_id: string
  url: string
  html_url: string
  followers_url: string
  following_url: string
  gists_url: string
  starred_url: string
  subscriptions_url: string
  organizations_url: string
  repos_url: string
  events_url: string
  received_events_url: string
  type: string
  site_admin: boolean
  score: number
}

export interface UserDetailedModel extends UserSummarizedModel {
  name: string
  company: string | null
  blog: string
  location: string | null
  email: string | null
  hireable: string | null
  bio: string | null
  twitter_username: string | null
  public_repos: number
  public_gists: number
  followers: number
  following: number
  created_at: string
  updated_at: string
}

export interface RemoteUserDetailedResultModel extends UserDetailedModel {}
