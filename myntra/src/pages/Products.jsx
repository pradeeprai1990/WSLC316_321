import React from 'react';
import Header from '../commonComponent/Header';
import BreadCumMenu from '../commonComponent/BreadCumMenu';
import Footer from '../commonComponent/Footer';
import ProductComponent from './components/ProductComponent';
export default function Products() {
  return (
    <>
      <BreadCumMenu />
      <ProductComponent />
    </>
  );
}
