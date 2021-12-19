import mock from 'mocks/$mock'
import { client } from 'features/api'

export const setupMock = () => {
  const mocked = process.env.REACT_APP_MOCKED
  if (mocked === 'true') mock(client)
}
