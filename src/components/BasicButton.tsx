'use client';

import {ReactNode} from 'react';

interface ButtonProps {
  children: string | ReactNode;
  classNames?: string;
  onClick?: () => void;
}

export default function BasicButton({
  children,
  classNames,
  onClick,
}: ButtonProps) {
  return (
    <button
      className={`p-3 rounded-full w-full ${classNames}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
