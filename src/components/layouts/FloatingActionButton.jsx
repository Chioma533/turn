import { Plus } from 'lucide-react';
import React, { useState } from 'react'

const FloatingActionButton = ({onClick}) => {
  const [isSpinning, setIsSpinning] = useState(false);

  const handleClick = () => {
    setIsSpinning(true);
    setTimeout(() => {
      onClick();
      setIsSpinning(false);
    }, 600);
  };

  return (
    <button
      onClick={handleClick}
      disabled={isSpinning}
      className="fixed bottom-8 right-8 w-14 h-14 bg-cyan-500 hover:bg-cyan-600 text-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 disabled:cursor-not-allowed"
    >
      <Plus 
        size={24} 
        className={`transition-transform duration-500 ${isSpinning ? 'rotate-360' : ''}`}
      />
    </button>
  );
}

export default FloatingActionButton