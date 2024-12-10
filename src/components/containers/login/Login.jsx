import React from 'react';
import CoverPage from '../coverPage/CoverPage';
import LoginForm from './LoginForm';


const LoginPage = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen bg-gray-400 bg-opacity-30 ">
      <div className="sticky top-0 h-screen overflow-hidden flex justify-center items-center bg-gray-300">
        <CoverPage />
      </div>
      <div className="overflow-y-auto h-screen bg-gray-100 flex justify-center items-start p-4">
        <LoginForm />
      </div>
    </div>
  );
}

export default LoginPage;
