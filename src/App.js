
import { Route, Routes, useLocation } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Step1 from './pages/Step1';
import { useEffect } from 'react';
import Step2 from './pages/Step2';
import Step3 from './pages/Step3';
import Step4 from './pages/Step4';


function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <Routes>
      <Route path="/" element={<Step1 />} />
      <Route path="/step2" element={<Step2 />} />
      <Route path="/step3" element={<Step3 />} />
      <Route path="/step4" element={<Step4 />} />
    </Routes>
  )
}

export default App;
