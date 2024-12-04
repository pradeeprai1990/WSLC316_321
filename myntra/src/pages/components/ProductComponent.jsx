import React from 'react';

import CategoriesComponent from './CategoriesComponent';
import BrandsComponent from './BrandsComponent';
import DiscountComponent from './DiscountComponent';
import PriceComponents from './PriceComponents';
import ProductSidebar from './ProductSidebar';
import ProductCard from './ProductCard';
export default function ProductComponent() {
  return (
    <section>
      <div className="py-3 ps-10 grid grid-cols-[20%_30%] gap-[50%] justify-between items-center">
        <ul className="flex gap-10 font-semibold">
          <li>FILTERS</li>
          <li>CLEAR ALL</li>
        </ul>
        <select
          id="fillter-option"
          className="w-[45%] focus:border-none focus:ring-gray-600"
          required
        >
          <option value="">Sort by : Recommended</option>
          <option value="">Name : A to Z</option>
          <option value="">Name : Z to A</option>
          <option value="">Price : Low to High</option>
          <option value="">Price : High to Low</option>
          <option value="">Discounted Price : Low to High</option>
          <option value="">Discounted Price : High to Low</option>
          <option value="">Rating : Low to High</option>
          <option value="">Rating : High to Low</option>
        </select>
      </div>
      <div className="py-3 grid grid-cols-[15%_80%] gap-7">
        <ProductSidebar />
        <ProductCard />
      </div>
    </section>
  );
}
