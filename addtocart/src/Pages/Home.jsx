import React, { useContext, useEffect, useState } from "react";
import { countContext } from "../MainContext.jsx";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Home() {
  let [product, setProduct] = useState([]);

  let getApiData = () => {
    axios.get(`https://dummyjson.com/products`)
      .then((res) => res.data)
      .then((finalres) => {
        setProduct(finalres.products);
      });
  };

  useEffect(() => {
    getApiData();
  }, []);
  return (
    <div className="max-w-[1320px] mx-auto bg-gray-50 min-h-screen py-5">
       <ToastContainer 
          position="top-right"
          
         />
     
     
      <div className="mx-auto max-w-2xl px-4 py-5 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Products</h2>
        <div className="grid  gap-x-6 gap-y-10  lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 xl:gap-x-8">
          {product.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      </div>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-5 right-5 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 text-[30px]"
      >
        ↑
      </button>
    </div>
  );
}
function ProductItem({ product }) {
  let { cart, setCart } = useContext(countContext);
  let { id, title, thumbnail, price, category } = product;
  // Check if Product is in Cart
  let isProductInCart = cart.filter((item) => item.pid === id);
  // Add to Cart
  let addToCart = () => {
    let oldData = [...cart];
    let obj = {
      pid: id,
      title,
      thumbnail,
      price,
      Qty: 1,
    };
    oldData.push(obj);
    setCart(oldData);
    toast.success("Product added to cart!",{
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          toggle:undefined
    });
  };

  // Remove from Cart
  let removeFromCart = () => {
    if(confirm("You want Delete Data From Cart"))
    {
      let updatedCart = cart.filter((item) => item.pid !== id);
      setCart(updatedCart);
      toast.success("Your Data is removed From cart",{
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          toggle:undefined
      })
    }
      console.log(id)
  };

  return (
    <div className="group relative bg-white shadow-lg p-5 rounded-lg hover:shadow-2xl transition-shadow duration-300 ">
     
      <div className="relative overflow-hidden rounded-md">
        <img
          alt={title}
          src={thumbnail}
          className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black bg-opacity-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-800 truncate">{title}</h3>
        <p className="text-sm text-gray-500 mt-1">{category}</p>
        <p className="text-xl font-bold text-gray-900 mt-2">${price}</p>
      </div>
      {isProductInCart.length==1 ? (
        <button
          className="mt-4 w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors duration-300"
          onClick={removeFromCart}
        >
          Remove from Cart
        </button>
      ) : (
        <button
          className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300"
          onClick={addToCart}
        >
          Add to Cart
        </button>
      )}
    </div>
  );
}
