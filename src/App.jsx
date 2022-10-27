import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/layout';
import ForgotPassword from './pages/forgot-password';
import Home from './pages/home';
import SignIn from './pages/sign-in';
import SignUp from './pages/sign-up';
import VideoDetail from './pages/video-detail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/programs/:id" element={<VideoDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
