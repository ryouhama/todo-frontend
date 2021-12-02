import { LocalStorage } from 'types/auth'

export const setAccessToken = (storage: LocalStorage) => {
  localStorage.setItem('accessToken', storage.accessToken)
}

export const getAccessToken = () => {
  const accessToken = localStorage.getItem('accessToken')
  if (!accessToken) throw Error('Dont Have Access Token')
  return accessToken
}

export const hasAccessToken = () => {
  try {
    return Boolean(getAccessToken())
  } catch (error) {
    return false
  }
}
