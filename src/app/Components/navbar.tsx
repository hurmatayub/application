
"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-black text-white font-sans">
      <header className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center">
            <Image
              src="/images/coffee-icon1.png"
              alt="Coffee Logo"
              width={40}
              height={40}
              className="mr-4"
            />
            <Link href="/">
              <span className="text-lg font-bold">Coffee Lab</span>
            </Link>
          </div>

          {/* Hamburger Menu Button for Mobile */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              {/* Hamburger Icon with three divs */}
              <div className="w-6 h-1 bg-white mb-1"></div>
              <div className="w-6 h-1 bg-white mb-1"></div>
              <div className="w-6 h-1 bg-white"></div>
            </button>
          </div>

          {/* Menu Items for Medium and Larger Screens */}
          <ul className="hidden md:flex space-x-6">
            <li>
              <Link
                href="/"
                className="hover:bg-[#5e3b21] hover:border hover:border-white py-2 px-6 rounded-full"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:bg-[#5e3b21] hover:border hover:border-white py-2 px-6 rounded-full"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/shop"
                className="hover:bg-[#5e3b21] hover:border hover:border-white py-2 px-6 rounded-full"
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                href="/reviews"
                className="hover:bg-[#5e3b21] hover:border hover:border-white py-2 px-6 rounded-full"
              >
                Reviews
              </Link>
            </li>
            <li>
              <Link
                href="/contactUs"
                className="hover:bg-[#5e3b21] hover:border hover:border-white py-2 px-6 rounded-full"
              >
                Contact Us
              </Link>
            </li>
          </ul>

          {/* Login Button for Medium and Larger Screens */}
          <div className="hidden md:flex items-center">
            <Link
              href="/login"
              className="hover:bg-[#5e3b21] border border-white py-2 px-6 rounded-full"
            >
              Login
            </Link>
          </div>
        </nav>

        {/* Mobile Menu Items */}
        <div
          className={`md:hidden ${isOpen ? "block" : "hidden"} mt-4`}
        >
          <ul className="flex flex-col space-y-4">
            <li>
              <Link
                href="/"
                className="hover:bg-[#5e3b21] hover:border hover:border-white py-2 px-6 rounded-full"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:bg-[#5e3b21] hover:border hover:border-white py-2 px-6 rounded-full"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/shop"
                className="hover:bg-[#5e3b21] hover:border hover:border-white py-2 px-6 rounded-full"
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                href="/reviews"
                className="hover:bg-[#5e3b21] hover:border hover:border-white py-2 px-6 rounded-full"
              >
                Reviews
              </Link>
            </li>
            <li>
              <Link
                href="/contactUs"
                className="hover:bg-[#5e3b21] hover:border hover:border-white py-2 px-6 rounded-full"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                href="/login"
                className="hover:bg-[#5e3b21] border border-white py-2 px-6 rounded-full"
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}
