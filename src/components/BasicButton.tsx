'use client';

import {ReactNode} from 'react';

interface ButtonProps {
  children: string | ReactNode;
  classNames?: string;
  onClick?: () => void;
  type: 'button' | 'submit' | 'reset';
}

export default function BasicButton({
  children,
  classNames,
  onClick,
  type,
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`rounded-full w-full ${classNames}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
