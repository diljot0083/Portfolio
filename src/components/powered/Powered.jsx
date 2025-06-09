import React from 'react';
import vercelLogo from '../../assets/Vercel.png'
// Add logos to your assets folder

const Powered = () => {
  return (
    <div className="flex">
      <img src={vercelLogo} alt="Vercel" className="h-15" />
    </div>
  );
};

export default Powered;
