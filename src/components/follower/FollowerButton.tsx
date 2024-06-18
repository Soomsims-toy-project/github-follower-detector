import { MouseEventHandler } from 'react';

interface FollowerButtonProps {
  text: string;
  onClick?: MouseEventHandler;
  className?: string;
}

function FollowerButton({ text, onClick, className }: FollowerButtonProps) {
  return (
    <button className={`rounded-lg border px-3 py-2 text-center text-xl ${className}`} onClick={onClick}>
      {text}
    </button>
  );
}

export default FollowerButton;
