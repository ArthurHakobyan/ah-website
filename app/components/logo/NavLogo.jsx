import React from "react";
import { Oswald } from "next/font/google";
import Link from "next/link";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

const NavLogo = () => {
  return (
    <div>
      <Link href="/">
        <div className={`text-azure font-[700] ${oswald.className}`}>
          ArturHakobyan
        </div>
      </Link>
    </div>
  );
};

export default NavLogo;
