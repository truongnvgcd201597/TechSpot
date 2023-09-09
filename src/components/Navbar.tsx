import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navbar() {
  const [isOpen, openMenu] = useState<Boolean>(false);
  const [section, setSection] = useState<string>("home");
  const cartQuantity: number = useSelector(
    (state: any) => state.user.cart.length
  );
  return (
    <>
      <nav
        className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800 justify-center items-center"
        style={{ fontWeight: "bold" }}
      >
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <Link to="/">
            <a className="flex items-center">
              <img
                src="/app/logo.png"
                className="mr-3 w-20 md:w-40"
                alt="Shopsy logo"
              />
            </a>
          </Link>
          <div
            className={
              isOpen
                ? "justify-between items-center w-full md:flex md:w-auto md:order-1"
                : "hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
            }
            id="mobile-menu-4"
          >
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium mt-1 justify-center items-center">
              <li>
                <Link to="/">
                  <a
                    className=" block py-2 pr-4 pl-3 text-gray-700 hover:text-logogreen border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    aria-current="page"
                    onClick={() => openMenu(!isOpen)}
                  >
                    Home
                  </a>
                </Link>
              </li>

              <li>
                <Link to="/shop">
                  <a
                    className="block py-2 pr-4 pl-3 text-gray-700 hover:text-logogreen border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    onClick={() => openMenu(!isOpen)}
                  >
                    Shop
                  </a>
                </Link>
              </li>
              <li>
                <Link to="/about">
                  <a
                    className="block py-2 pr-4 pl-3 text-gray-700 hover:text-logogreen border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    onClick={() => openMenu(!isOpen)}
                  >
                    About
                  </a>
                </Link>
              </li>
              <li>
                <Link to="/cart">
                  <a
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    onClick={() => openMenu(!isOpen)}
                  >
                    <div className="flex flex-row md:justify-center items-center ">
                      <img src="https://img.icons8.com/windows/32/000000/favorite-cart.png" />
                      <span
                        className="px-2 py-1 text-sm text-white bg-logogreen rounded-full"
                        style={{ color: "#fff" }}
                      >
                        {cartQuantity}
                      </span>
                    </div>
                  </a>
                </Link>
              </li>
              <li>
                <Link to="/favourite">
                  <a
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    onClick={() => openMenu(!isOpen)}
                  >
                    <div className="flex flex-row md:justify-center items-center ">
                      <img src="https://img.icons8.com/cotton/32/000000/hearts--v8.png" />
                      <span
                        className="px-2 py-1 text-sm text-white bg-logogreen rounded-full"
                        style={{ color: "#fff" }}
                      >
                        0
                      </span>
                    </div>
                  </a>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <div className="flex flex-row justify-center items-center border-green-600 border-2 rounded-full object-contain">
                    <img className="w-8 h-8 rounded-full" alt="user photo" />
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
