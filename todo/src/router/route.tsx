import {
  Route,
  Routes,
  BrowserRouter,
  Navigate,
  Outlet,
} from 'react-router-dom'
import { SignIn } from 'pages/signIn'
import { SignUp } from 'pages/signUp/SignUp'
import { Container as DashBoad } from 'pages/dsshBoad'
import { hasAccessToken } from './storage'

export const AppRouter: React.VFC = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<PrivateRouter />}>
          <Route path="dashboard" element={<DashBoad />} />
          <Route path="" element={<Navigate to="dashboard" />} />
        </Route>
        <Route path="auth" element={<PublicRouter />}>
          <Route path="sign-in" element={<SignIn />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="" element={<Navigate to="sign-in" />} />
        </Route>
        <Route path="*" element={<Navigate to="auth" />} />
      </Routes>
    </BrowserRouter>
  )
}

const PrivateRouter: React.FC = (props) => {
  const hasToken = hasAccessToken()

  return hasToken ? <Outlet /> : <Navigate to="auth" />
}

const PublicRouter: React.FC = (props) => {
  const hasToken = hasAccessToken()

  return hasToken ? <Navigate to="/" /> : <Outlet />
}
