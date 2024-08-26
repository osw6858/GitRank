import {ReactNode} from 'react';

interface Props {
  children: ReactNode;
  modal: ReactNode;
}

export default function GuestLayout({children, modal}: Props) {
  return (
    <>
      {children}
      {modal}
    </>
  );
}
