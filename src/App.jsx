import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './pages/signup';
import OtpVerification from './pages/otpverification';
import FinishSignup from './pages/finishsignup';
import HomePage from './pages/homepage';
import ThreePartMultipage from './pages/multipage';
import UploadPhoto from './pages/uploadphoto';
import DisplayPhoto from './pages/displayphoto';

import { useEffect, useState } from 'react';

function App() {
  const [isScreenLarge, setIsScreenLarge] = useState(window.innerWidth > 768);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsScreenLarge(window.innerWidth > 768);
    };

    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);
  useEffect(() => {
    const primaryColorFromBackend = localStorage.getItem('themeColor') || '#853836';
    document.documentElement.style.setProperty('--primary-color', primaryColorFromBackend);
  }, []);
  if (isScreenLarge) {
    return (
      <div
        style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        This website is only accessible for width below 768px. Please shift to a smaller screen.
      </div>
    );
  }
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/signup' element={<Signup />} />
          <Route path='/otp' element={<OtpVerification />} />
          <Route path='/finish' element={<FinishSignup />} />
          <Route path='/' element={<HomePage />} />
          <Route path='/multipage' element={<ThreePartMultipage />} />
          <Route path='/uploadphoto' element={<UploadPhoto />} />
          <Route path='/displayphoto' element={<DisplayPhoto />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
