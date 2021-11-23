import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { SignIn } from 'pages/signIn'
import { SignUp } from 'pages/signUp/SignUp'
import { Container as DashBoad} from 'pages/dsshBoad'
import { hasAccessToken } from './storage'

export const AppRouter: React.VFC = () => {
  const hasToken = hasAccessToken()

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      {hasToken ? (
        <Routes>
          <Route path="/" element={<DashBoad/ >} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/sign-up/" element={<SignUp />} />
        </Routes>
      )}
    </BrowserRouter>
  )
}
