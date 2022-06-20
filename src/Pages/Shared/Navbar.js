import React from 'react';
import logo from '../Photos/amazonlogo.png';

const Navbar = () => {
    return (
        <div class="navbar bg-base-content">
  <div class="navbar-start">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-compact text-neutral-content dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <img width="100" height="100" src={logo} alt="" />
  </div>
  <div class="form-control">
  <div class="input-group">
    <input type="text" placeholder="Search…" class="input " />
    <button class="btn bg-warning">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
  </div>
</div>
  <div class="navbar-center text-neutral-content hidden lg:flex">
    <ul class="menu menu-horizontal p-0">
      <li><a>Item 1</a></li>
      <li><a>Item 3</a></li>
    </ul>
  </div>
  <div class="navbar-end">
    <a class="btn">Get started</a>
  </div>
</div>
    );
};

export default Navbar;