import React from 'react';
import { useNavigate } from 'react-router';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="flex flex-col items-center justify-between p-4 bg-red-200">
      <div className="text-3xl font-bold">Github</div>
      <div className="text-3xl font-bold">Resume</div>

    </header>
  );
};

export default Header;
