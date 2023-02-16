import axios, { AxiosResponse } from 'axios'

import { AMOUNT_OF_USERS_FETCHED_PER_REQUEST } from '~/constants'
import { RemoteUserResultModel } from '~/models'

export const getUserList = async (term: string): Promise<RemoteUserResultModel> => {
  const response = await axios.get<RemoteUserResultModel>(
    `https://api.github.com/search/users?per_page=${AMOUNT_OF_USERS_FETCHED_PER_REQUEST}&page=1&q=${term}`
  )

  const { data } = response as AxiosResponse
  return data
}
