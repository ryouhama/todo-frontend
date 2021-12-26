import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom'
import { SignIn } from 'pages/signIn'
import { SignUp } from 'pages/signUp/SignUp'
import { DashBoard } from 'pages/dsshBoard'
import { WorkSpace } from 'pages/workSpace'
import { hasAccessToken } from './storage'

export const AppRouter: React.VFC = () => {
  const hasToken = hasAccessToken()

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        {hasToken ? (
          <>
            <Route path="/workspace/:id/dashboard" element={<DashBoard />} />
            <Route path="/workspace" element={<WorkSpace />} />
            <Route path="*" element={<Navigate to="/workspace" />} />
          </>
        ) : (
          <>
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="*" element={<Navigate to="/sign-in" />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  )
}
