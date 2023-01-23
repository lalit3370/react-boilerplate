import React from 'react';
import { Outlet } from 'react-router-dom';
import './MainLayout.scss';

export default function MainLayout() {
  return (
    <>
      <div className="Landing__image_wrapper">this is image</div>
      <Outlet />
    </>
  );
}
