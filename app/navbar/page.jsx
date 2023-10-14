"use client";

import React, { useState } from "react";
import Link from "next/link";
import NavLogo from "../components/logo/NavLogo";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="bg-dark-blue py-8 px-8 md:px-20 sticky top-0 left-0 right-0 z-10">
      <div className="flex justify-between container mx-auto">
        <NavLogo />
        <div className=" text-cream font-semibold ">
          <ul className="hidden md:flex gap-8">
            <li>
              <Link href="/">
                <p>Home</p>
              </Link>
            </li>
            <li>
              <Link href="/about-me">
                <p>About Me</p>
              </Link>
            </li>
            <li>
              <Link href="/my-works">
                <p>My Works</p>
              </Link>
            </li>
            <li>
              <Link href="https://nextjs-portfolio-eight-gray.vercel.app/" target="_blank">
                <p>My Blog</p>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <p>Contact Me</p>
              </Link>
            </li>
          </ul>
          <div onClick={handleNav} className="block md:hidden cursor-pointer">
            {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
          </div>
          <div
            className={
              !nav
                ? "fixed left-0 top-0 w-[60%] h-full bg-dark-blue ease-in-out duration-500 md:hidden"
                : "fixed left-[-100%] ease-in-out duration-300"
            }
          >
            <ul className="uppercase p-4">
              <li className="p-4 border-b border-azure" onClick={handleNav}>
                <Link href="/">
                  <p>Home</p>
                </Link>
              </li>
              <li className="p-4 border-b border-azure" onClick={handleNav}>
                <Link href="/about-me">
                  <p>About Me</p>
                </Link>
              </li>
              <li className="p-4 border-b border-azure" onClick={handleNav}>
                <Link href="/my-works">
                  <p>My Works</p>
                </Link>
              </li>
              <li className="p-4 border-b border-azure" onClick={handleNav}>
              <Link href="https://nextjs-portfolio-eight-gray.vercel.app/" target="_blank">
                <p>My Blog</p>
              </Link>
            </li>
              <li className="p-4 border-b border-azure" onClick={handleNav}>
                <Link href="/contact">
                  <p>Contact Me</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
