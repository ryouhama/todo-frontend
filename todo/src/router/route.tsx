import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom'
import { SignIn } from 'pages/signIn'
import { SignUp } from 'pages/signUp/SignUp'
import { Container as DashBoad } from 'pages/dsshBoad'
import { hasAccessToken } from './storage'

export const AppRouter: React.VFC = () => {
  const hasToken = hasAccessToken()

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        {hasToken ? (
          <>
            <Route path="/dashboard/" element={<DashBoad />} />
            <Route path="*" element={<Navigate to="/dashboard/" />} />
          </>
        ) : (
          <>
            <Route path="/sign-in/" element={<SignIn />} />
            <Route path="/sign-up/" element={<SignUp />} />
            <Route path="*" element={<Navigate to="/sign-in/" />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  )
}
