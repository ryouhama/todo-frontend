import { LocalStorage } from 'types/auth'

const ACCESS_TOKEN_KEY = 'accessToken'

export const setAccessToken = (storage: LocalStorage) => {
  localStorage.setItem(ACCESS_TOKEN_KEY, storage.accessToken)
}

export const deleteAccessToken = () => {
  localStorage.removeItem(ACCESS_TOKEN_KEY)
}

export const getAccessToken = () => {
  const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY)
  if (!accessToken) throw Error(`Dont Have ${ACCESS_TOKEN_KEY}`)
  return accessToken
}

export const hasAccessToken = () => {
  try {
    return Boolean(getAccessToken())
  } catch (error) {
    return false
  }
}
