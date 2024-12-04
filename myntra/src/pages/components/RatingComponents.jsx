import React from 'react';

export default function RatingComponents() {
  return (
    <div className="ps-10 border border-b-gray-700 h-[200px] overflow-y-auto">
      <h3 className="uppercase pt-2 font-semibold">Rating</h3>
      <div className="py-2">
        <input type="radio" name="above4" id="above4" />
        <label htmlFor="above4" className="ps-3 ">
          4★ & above
        </label>
      </div>
      <div className="py-2">
        <input type="radio" name="below4" id="below4" />
        <label htmlFor="below4" className="ps-3 ">
          3★ & above
        </label>
      </div>
      <div className="py-2">
        <input type="radio" name="below3" id="below3" />
        <label htmlFor="below3" className="ps-3 ">
          2★ & above
        </label>
      </div>
      <div className="py-2">
        <input type="radio" name="below2" id="below2" />
        <label htmlFor="below2" className="ps-3 ">
          1★ & above
        </label>
      </div>
    </div>
  );
}
