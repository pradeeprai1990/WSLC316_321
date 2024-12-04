import React from 'react';
import { brandData } from '../../data/BrandData';
export default function BrandsComponent() {
  return (
    <div className="ps-10 border border-b-gray-700 capitalize h-[295px] overflow-y-auto">
      <h3 className="uppercase pt-2 font-semibold">brand</h3>
      {brandData.map((brandData, index) => {
        return <Brands key={index + 1} brandData={brandData} />;
      })}
    </div>
  );
}

function Brands({ brandData }) {
  let { brand } = brandData;
  return (
    <div className="py-2">
      <input type="checkbox" name={brand} id={brand} />
      <label htmlFor={brand} className="ps-3 ">
        {brand}
      </label>
    </div>
  );
}
