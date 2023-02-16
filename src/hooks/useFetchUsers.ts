import { useEffect, useState } from 'react'

import { UserModel } from '~/models'
import { getUserList } from '~/services/user'

interface useFetchUsersReturn {
  users: UserModel[]
  isLoading: boolean
  error: Error | null
}

export const useFetchUsers = (termToSearch: string): useFetchUsersReturn => {
  const [users, setUsers] = useState<UserModel[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<Error | null>(null)

  const fetchUsers = async (term: string) => {
    setIsLoading(true)
    try {
      const response = await getUserList(term)
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
