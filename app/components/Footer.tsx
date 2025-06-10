import Link from "next/link";
import SocialItem from "./SocialItem";

const Footer = () => {
  return (
    <footer className="bg-black py-14">
      <div className="container mx-auto px-6">
        <div className="text-white flex flex-col lg:flex-row justify-between items-center">
          <div className="mb-5">
            © 2025
            <span className="ml-1">
              <b>All rights reserved.</b>
            </span>
          </div>
          <div className="mb-5">
            <Link href={"/"}>
              <h1 className="text-5xl font-bold">TINATINI</h1>
            </Link>
          </div>
          <div className="flex text-black gap-4">
            <SocialItem />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
