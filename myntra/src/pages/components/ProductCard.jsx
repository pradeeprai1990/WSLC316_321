import React from 'react';
import { Card } from 'flowbite-react';
import { productData } from '../../data/ProductData';

export default function ProductCard() {
  return (
    <div className="grid grid-cols-4 gap-5 items-start">
      {productData.map((product) => {
        let { images, title, desc, price, discountPercentage, stock } = product;
        return (
          <Card className="max-w-sm" imgSrc={images}>
            <a href="#">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                {title}
              </h5>
            </a>
            <p>{desc}</p>
            <div className="flex items-center gap-3">
              <span className="text-lg font-bold text-gray-900 dark:text-white">
                Rs.{price}
              </span>
              <span className="text-base font-normal text-gray-900 dark:text-white">
                Rs.{discountPercentage}
              </span>
              <span className="text-sm font-normal text-red-700 dark:text-white">
                ({stock})
              </span>
            </div>

            <div className="flex items-center justify-between">
              <a
                href="#"
                className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
              >
                Add to cart
              </a>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
