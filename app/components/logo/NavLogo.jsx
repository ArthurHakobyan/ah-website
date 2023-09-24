import React from "react";
import { Oswald } from "next/font/google";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

const NavLogo = () => {
  return (
    <div>
      <div className={`text-cream font-[700] ${oswald.className}`}>
        ArturHakobyan
      </div>
    </div>
  );
};

export default NavLogo;
