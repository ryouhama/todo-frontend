import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SignIn } from 'pages/signIn'
import { SignUp } from 'pages/signUp/SignUp';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sign-in/" element={<SignIn />} />
        <Route path="/sign-up/" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
