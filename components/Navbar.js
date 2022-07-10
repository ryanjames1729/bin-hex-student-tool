import React from "react";
import { useState } from "react";
import Link from 'next/link';
import Script from 'next/script'


const Navbar = ({ landingPages }) => {
  
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="w-screen shadow-2xl h-40 lg:h-24">
    <div className="flex items-center justify-between px-8 py-8">
      <Link href="/" className="text-xl">
        bin-hex-student-tool
      </Link>
      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2 px-8 hamburger block"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-4 py-8"
              onClick={() => setIsNavOpen(false)}
            >
                <div className="space-y-2 px-2 hamburger open block">
                    <span className="animate-pulse hamburger-top"></span>
                    <span className="animate-pulse hamburger-middle"></span>
                    <span className="animate-pulse hamburger-bottom"></span>
                </div>
                <ul className="flex flex-col items-right justify-between min-h-[100px]">
                    <li className="border-b border-gray-400 my-2 uppercase">
                        <Link href="#">BINARY</Link>
                    </li>
                    <li className="border-b border-gray-400 my-2 uppercase">
                        <Link href="#">HEXADECIMAL</Link>
                     </li>
                </ul>
            </div>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden uppercase space-x-8 lg:flex">
          <li>
            <Link href="#binary">BINARY</Link>
          </li>
          <li>
            <Link href="#hexadecimal">HEXADECIMAL</Link>
          </li>
        </ul>
      </nav>
    </div>
    </div>
  );
}



export default Navbar