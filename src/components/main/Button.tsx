import React from 'react';

interface MainButtonProps {
  className: string;
  text: string;
  onClick: () => void;
}

const MainButton = ({ className, text, onClick }: MainButtonProps) => {
  return (
    <button type="button" className={`rounded-lg p-3 text-center text-2xl font-bold ${className}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default MainButton;
