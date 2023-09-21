import React from "react";
import Link from "next/link";
import NavLogo from "../components/logo/NavLogo";

const Navbar = () => {
  return (
    <div className="bg-dark-blue py-8 px-8 sticky top-0 left-0 right-0 z-10 border-b border-azure">
     <div className="flex justify-between container mx-auto">
      <NavLogo />
      <div className="text-cream font-semibold">
      <ul className="flex gap-8">
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
                <Link href="/contact">
                  <p>Contact Me</p>
                </Link>
              </li>
            </ul>
      </div>
     </div>
    </div>
  );
};

export default Navbar;
