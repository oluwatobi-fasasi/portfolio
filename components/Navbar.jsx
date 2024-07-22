"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaFacebook,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Navbar = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const handleNavClick = () => {
    setMobileNav(!mobileNav);
  };
  return (
    <nav className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#08111e] text-gray-300">
      <div>
        <Image src="/logo.jpg" alt="logo" width={50} height={50} />
      </div>

      <div className="md:flex justify-between gap-5 nevClass hidden px-4">
        <Link href={"/"}>Home</Link>
        <Link href={"/"}>About</Link>
        <Link href={"/"}>Skills</Link>
        <Link href={"/"}>Works</Link>
        <Link href={"/"}>Contact</Link>
      </div>

      <div className="md:hidden z-10" onClick={handleNavClick}>
        {!mobileNav ? <FaBars /> : <FaTimes />}
      </div>

      <div
        className={
          !mobileNav
            ? "hidden"
            : " absolute top-0 left-0 w-full h-screen bg-[#08111e] flex flex-col justify-center items-center  text-base uppercase font-semibold;"
        }
      >
        <Link href={"/"} className="py-6">
          Home
        </Link>
        <Link href={"/"} className="py-6">
          About
        </Link>
        <Link href={"/"} className="py-6">
          Skills
        </Link>
        <Link href={"/"} className="py-6">
          Works
        </Link>
        <Link href={"/"} className="py-6">
          Contact
        </Link>
      </div>

      <div className="lg:flex flex-col fixed top-[35%] left-0 hidden">
        <Link
          href={"/"}
          className="w-[140px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-1px] duration-300 bg-blue-600 px-2 rounded-full rounded-l-none"
        >
          {" "}
          Facebook <FaFacebook size={30} />{" "}
        </Link>
        <Link
          href={"/"}
          className="w-[140px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-1px] duration-300 bg-[#333] px-2 rounded-full rounded-l-none mt-2"
        >
          {" "}
          Instagram <FaInstagram size={30} />{" "}
        </Link>
        <Link
          href={"/"}
          className="w-[140px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-1px] duration-300 bg-gray-900 px-2 rounded-full rounded-l-none  mt-2"
        >
          {" "}
          Github <FaGithub size={30} />{" "}
        </Link>
        <Link
          href={"/"}
          className="w-[140px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-1px] duration-300 bg-pink-600 px-2 rounded-full rounded-l-none mt-2"
        >
          {" "}
          Email <HiOutlineMail size={30} />{" "}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
