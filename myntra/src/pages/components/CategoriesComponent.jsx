import React from 'react';
import { categoriesData } from '../../data/CategoriesData';

export default function CategoriesComponent() {
  return (
    <div className="ps-10 border border-b-gray-700 capitalize h-[295px] overflow-y-auto">
      <h3 className="uppercase pt-2 font-semibold">categories</h3>
      {categoriesData.map((category, index) => {
        return <Categories key={index + 1} category={category} />;
      })}
    </div>
  );
}

function Categories({ category }) {
  let { cat } = category;
  return (
    <div className="py-2">
      <input type="checkbox" name={cat} id={cat} />
      <label htmlFor={cat} className="ps-3 ">
        {cat}
      </label>
    </div>
  );
}
