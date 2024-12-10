import React from 'react';

const CoverPage = () => {
  return (
    <div className="flex justify-center items-start h-full">
    <img
      src={require("../../../assets/header.jpg")} 
      alt="cover"
      className="w-full h-full"
    />
  </div>
  
  );
}

export default CoverPage;
