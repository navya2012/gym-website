import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/containers/navbar/Navbar';
import Footer from './components/containers/footer/Footer';
import LoginPage from './components/containers/login/Login';
import SignUpPage from './components/containers/signup/signupPage';
import ContactUs from './pages/contact/ContactUs';
import FAQ from './pages/faq/Faq';
import HomePage from './pages/home/HomePage';
import Workouts from './pages/workouts/Workouts';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
        <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/sign-up' element={<SignUpPage />} />
          <Route path='/home-page' element={<HomePage />} />
          <Route path='/workouts' element={<Workouts />} />
          <Route path='/contact-us' element={<ContactUs />} />
          <Route path='/faq' element={<FAQ />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App
