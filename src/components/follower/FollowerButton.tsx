import React, { ElementType, MouseEventHandler } from 'react';

interface IFollowerButton {
  as?: ElementType;
  text: string;
  onClick?: MouseEventHandler;
  className?: string;
}

function FollowerButton({ as, text, onClick, className }: IFollowerButton) {
  const Comp = as ?? 'button';

  return (
    <Comp className={`rounded-lg border px-3 py-2 text-xl ${className}`} onClick={onClick}>
      {text}
    </Comp>
  );
}

export default FollowerButton;
