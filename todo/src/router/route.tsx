import {
  Route,
  Routes,
  BrowserRouter,
  Navigate,
  Outlet,
} from 'react-router-dom'
import { SignIn } from 'pages/signIn'
import { SignUp } from 'pages/signUp/SignUp'
import { DashBoard } from 'pages/dsshBoard'
import { WorkSpace } from 'pages/workSpace'
import { hasAccessToken } from './storage'
import { useAppSelector } from 'app/hooks'

export const AppRouter: React.VFC = () => {
  const user = useAppSelector((state) => state.auth.user)

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<PrivateRouter />}>
          <Route path="dashboard" element={<DashBoard />} />
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

const PrivateRouter: React.FC = () => {
  const hasToken = hasAccessToken()

  return hasToken ? <Outlet /> : <Navigate to="auth" />
}

const PublicRouter: React.FC = () => {
  const hasToken = hasAccessToken()

  return hasToken ? <Navigate to="/" /> : <Outlet />
}
