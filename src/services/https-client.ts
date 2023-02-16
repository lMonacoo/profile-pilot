import axios, { AxiosResponse } from 'axios'

export const httpClient = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    'Content-Type': 'application/json'
  }
})

export type HttpsResponse = AxiosResponse
