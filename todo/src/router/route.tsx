import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom'
import { SignIn } from 'pages/signIn'
import { SignUp } from 'pages/signUp/SignUp'
import { Container as DashBoad } from 'pages/dsshBoad'
import { hasAccessToken } from './storage'

export const AppRouter: React.VFC = () => {
  const hasToken = hasAccessToken()
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      {!hasToken && <Navigate to={'/'} />}
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/sign-up/" element={<SignUp />} />
        <Route path="/board/" element={<DashBoad />} />
      </Routes>
    </BrowserRouter>
  )
}
