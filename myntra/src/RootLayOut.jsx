import React from 'react';
import Header from './commonComponent/Header';
import Footer from './commonComponent/Footer';
import { Outlet } from 'react-router-dom';

export default function RootLayOut() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
