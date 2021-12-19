import { AppRouter } from 'router'
import { setupMock } from 'mocks/setup'

export const App: React.FC = () => {
  setUp()
  return <AppRouter />
}

const setUp = () => {
  setupMock()
}
