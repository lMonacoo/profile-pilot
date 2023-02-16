import { useEffect, useState } from 'react'

import { UserSummarizedModel } from '~/models'
import { getUsersList } from '~/services/user'

interface useFetchUsersReturn {
  users: UserSummarizedModel[]
  isLoading: boolean
  error: Error | null
}

export const useFetchUsers = (termToSearch: string): useFetchUsersReturn => {
  const [users, setUsers] = useState<UserSummarizedModel[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<Error | null>(null)

  const fetchUsers = async (term: string) => {
    setIsLoading(true)
    try {
      const response = await getUsersList(term)
      setUsers(response.items)
    } catch (error) {
      setError(error as Error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (termToSearch) fetchUsers(termToSearch)
    else setUsers([])
  }, [termToSearch])

  return {
    users,
    isLoading,
    error
  }
}
