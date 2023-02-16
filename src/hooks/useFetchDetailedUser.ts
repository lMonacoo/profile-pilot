import { useEffect, useState } from 'react'

import { UserDetailedModel } from '~/models'
import { getUserDetails } from '~/services/user'

interface useFetchDetailedUserReturn {
  user: UserDetailedModel | null
  isLoading: boolean
  error: Error | null
}

export const useFetchDetailedUser = (termToSearch: string): useFetchDetailedUserReturn => {
  const [user, setUser] = useState<UserDetailedModel | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<Error | null>(null)

  const fetchUserDetails = async (term: string) => {
    setIsLoading(true)
    try {
      const response = await getUserDetails(term)
      setUser(response)
    } catch (error) {
      setError(error as Error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (termToSearch) fetchUserDetails(termToSearch)
    else setUser(null)
  }, [termToSearch])

  return {
    user,
    isLoading,
    error
  }
}
