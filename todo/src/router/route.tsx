import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { SignIn } from 'pages/signIn'
import { SignUp } from 'pages/signUp/SignUp';
import { useAppSelector } from 'app/hooks';


export const AppRouter: React.VFC = () => {
  const hasAccessToken = useAppSelector((state) => state.auth.accessToken)

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      {hasAccessToken ? (
        <Routes>
          <Route path="/" element={<>Welcom to my app</>} />
          <Route path="/board" element={<>board</>} />
          <Route path="/task" element={<>task</>} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/sign-up/" element={<SignUp />} />
        </Routes>
      )
      }
    </BrowserRouter >
  )

};
