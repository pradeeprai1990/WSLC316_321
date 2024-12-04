import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="shadow-lg shadow-900 grid grid-cols-[10%_55%_30%] gap-[50px] py-5  justify-between items-center">
      <div className="ps-10">
        <img src="icons/myntraLogo.png" className="w-[55px]" alt="" />
      </div>

      <ul className="flex gap-4 text-[15px] font-bold">
        <li>
          <Link to={'/'}>MEN</Link>
        </li>
        <li>WOMEN</li>
        <li>KIDS</li>
        <li>HOME & LIVING</li>
        <li>BEAUTY</li>
        <li>
          Studio<sup>NEW</sup>
        </li>
      </ul>
      <ul>
        <li>
          <Link to={'/cart'}>Cart (0)</Link>
        </li>
      </ul>
    </header>
  );
}
