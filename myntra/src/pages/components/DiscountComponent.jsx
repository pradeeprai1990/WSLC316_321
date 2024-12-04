import React from 'react';

export default function DiscountComponent() {
  return (
    <div className="ps-10 border border-b-gray-700 h-[200px] overflow-y-auto">
      <h3 className="uppercase pt-2 font-semibold">DISCOUNT RANGE</h3>
      <div className="py-2">
        <input type="radio" name="below10" id="below10" />
        <label htmlFor="below10" className="ps-3 ">
          5% and above
        </label>
      </div>
      <div className="py-2">
        <input type="radio" name="above4" id="below15" />
        <label htmlFor="below15" className="ps-3 ">
          10% and above
        </label>
      </div>
      <div className="py-2">
        <input type="radio" name="below20" id="below20" />
        <label htmlFor="below20" className="ps-3 ">
          15% and above
        </label>
      </div>
      <div className="py-2">
        <input type="radio" name="above20" id="above20" />
        <label htmlFor="above20" className="ps-3 ">
          20% and above
        </label>
      </div>
    </div>
  );
}
