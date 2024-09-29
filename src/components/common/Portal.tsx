import React from 'react';
import ReactDOM from 'react-dom';

interface Props {
  children: React.ReactNode;
}

export default function Portal({ children }: Props) {
  const element = document.getElementById('portal');

  if (!element) {
    return <></>;
  }

  return element && children ? ReactDOM.createPortal(children, element) : null;
}
