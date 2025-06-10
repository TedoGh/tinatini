"use client";
import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseOutline } from "react-icons/io5";
import SocialItem from "./SocialItem";

const Header = () => {
  const [openMenu, SetOpenMenu] = useState<boolean>(false);

  const handleClick = () => {
    SetOpenMenu((prev) => !prev);
  };

  return (
    <header className="py-8">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          <div>
            <Link href={"/"}>
              <h1 className="text-5xl font-bold">TINATINI</h1>
            </Link>
          </div>
          <div className="hidden">
            <ul className="flex gap-4">
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li>
                <Link href={"/"}>About</Link>
              </li>
              <li>
                <Link href={"/gallery"}>Gallery</Link>
              </li>
              <li>
                <Link href={"/"}>Contact</Link>
              </li>
            </ul>
          </div>
          <div
            className="hidden cursor-pointer relative z-50"
            onClick={handleClick}
          >
            {openMenu ? (
              <IoCloseOutline color="#fff" size={24} />
            ) : (
              <GiHamburgerMenu size={24} />
            )}
          </div>
          {openMenu && (
            <div className="fixed inset-0 hidden flex-col justify-center items-center bg-black z-40">
              <ul className="flex flex-col gap-4 text-white text-lg">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/">About</Link>
                </li>
                <li>
                  <Link href="/">Gallery</Link>
                </li>
                <li>
                  <Link href="/">Contact</Link>
                </li>
              </ul>
              <div className="flex text-black gap-4 mt-4">
                <SocialItem />
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
