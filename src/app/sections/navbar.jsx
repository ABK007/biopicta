'use client';
import { useState } from 'react';
import Image from 'next/image';
import Biopicta from '@/app/images/biopicta.svg';
import Contact from '@/app/images/contact.svg';
import Contact2 from '@/app/images/contact2.svg';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="mx-auto border-b  sticky top-0 z-10 border-gray-200 bg-white shadow-sm w-full py-4">
      {/* Top Section */}
      <div className="flex justify-between items-center px-4">
        {/* Logo and Links */}
        <div className="flex items-center gap-6">
          <Link href="/">
            <Image src={Biopicta} alt="Biopicta Logo" width={120} height={40} />
          </Link>

          <div className="hidden md:flex gap-6">
            <h1 className="text-black text-sm cursor-pointer hover:text-[#B7512C]">
              Templates
            </h1>
            <Link href="/blogs">
              <h1 className="text-black text-sm cursor-pointer hover:text-[#B7512C]">
                Blogs
              </h1>
            </Link>
          </div>
        </div>
        {/* Buttons */}
        <div className="hidden md:flex gap-4">
          {/* Sign Up Button */}
          <a href="#foam">
            {' '}
            <div className="flex items-center gap-2 bg-[#B7512C] text-white px-4 py-2 rounded-full shadow hover:bg-[#9c3e21] cursor-pointer">
              <Image
                src={Contact}
                alt="Sign Up Icon"
                width={20}
                height={20}
                className="rounded-full"
              />
              <h1 className="text-sm font-medium">Get Access</h1>
            </div>
          </a>
        </div>
        {/* Burger Menu Icon */}
        <div
          className="md:hidden cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="w-6 h-0.5 bg-black mb-1"></div>
          <div className="w-6 h-0.5 bg-black mb-1"></div>
          <div className="w-6 h-0.5 bg-black"></div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col gap-4 px-4 py-2 border-t border-gray-200 bg-white">
          <h1 className="text-black text-sm cursor-pointer hover:text-[#B7512C]">
            Templates
          </h1>
          <Link href="/blogs">
            <h1 className="text-black text-sm cursor-pointer hover:text-[#B7512C]">
              Blogs
            </h1>
          </Link>
          <div className="flex flex-col mx-0 items-start gap-4">
            {/* Sign Up Button */}
            <a href="#foam">  <div  className="flex items-center gap-2 bg-[#B7512C] text-white px-4 py-2 rounded-full shadow hover:bg-[#9c3e21] cursor-pointer">
              <Image
                src={Contact}
                alt="Sign Up Icon"
                width={20}
                height={20}
                className="rounded-full"
              />
             
                {' '}
                <h1 className="text-sm font-medium">Get Access</h1>
              
            </div></a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
