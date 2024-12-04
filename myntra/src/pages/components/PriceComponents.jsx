import React from 'react';

export default function PriceComponents() {
  return (
    <div className="ps-10 border border-b-gray-700 h-[200px] overflow-y-auto">
      <h3 className="uppercase pt-2 font-semibold">PRICE</h3>
      <div className="py-2">
        <input type="radio" name="below250" id="below250" />
        <label htmlFor="below250" className="ps-3 ">
          Rs. 10 to Rs. 250
        </label>
      </div>
      <div className="py-2">
        <input type="radio" name="below500" id="below500" />
        <label htmlFor="below500" className="ps-3 ">
          Rs. 250 to Rs. 500
        </label>
      </div>
      <div className="py-2">
        <input type="radio" name="below1000" id="below1000" />
        <label htmlFor="below1000" className="ps-3 ">
          Rs. 500 to Rs. 1000
        </label>
      </div>
      <div className="py-2">
        <input type="radio" name="above1000" id="above1000" />
        <label htmlFor="above1000" className="ps-3 ">
          Rs. 1000 to Above
        </label>
      </div>
    </div>
  );
}
