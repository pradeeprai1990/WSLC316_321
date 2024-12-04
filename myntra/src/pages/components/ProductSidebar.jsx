import React from 'react';
import CategoriesComponent from './CategoriesComponent';
import BrandsComponent from './BrandsComponent';
import PriceComponents from './PriceComponents';
import DiscountComponent from './DiscountComponent';

export default function ProductSidebar() {
  return (
    <div className="border border-[#4f4f4e]">
      <CategoriesComponent />
      <BrandsComponent />
      <PriceComponents />
      <DiscountComponent />
    </div>
  );
}
