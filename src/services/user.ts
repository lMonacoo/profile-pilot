import { AMOUNT_OF_USERS_FETCHED_PER_REQUEST } from '~/constants'
import { RemoteUserDetailedResultModel, RemoteUserSummarizedResultModel } from '~/models'

import { httpClient, HttpsResponse } from './https-client'

export const getUsersList = async (searchBy: string): Promise<RemoteUserSummarizedResultModel> => {
  const response = await httpClient.get<RemoteUserSummarizedResultModel>(
    `search/users?per_page=${AMOUNT_OF_USERS_FETCHED_PER_REQUEST}&page=1&q=${searchBy}`
  )

  const { data } = response as HttpsResponse
  return data
}

export const getUserDetails = async (username: string): Promise<RemoteUserDetailedResultModel> => {
  const response = await httpClient.get<RemoteUserDetailedResultModel>(`users/${username}`)

  const { data } = response as HttpsResponse
  return data
}
