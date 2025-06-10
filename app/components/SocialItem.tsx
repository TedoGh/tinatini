import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

const SocialItem = () => {
  return (
    <>
      <Link href={"https://www.facebook.com/tiko.ghachava"}>
        <div className="w-10 h-10 flex justify-center items-center rounded-[50%] bg-white">
          <FaFacebookF size={20} />
        </div>
      </Link>
      <Link href={"https://www.instagram.com/tiko_ghachava"}>
        <div className="w-10 h-10 flex justify-center items-center rounded-[50%] bg-white">
          <FaInstagram size={20} />
        </div>
      </Link>
      <Link href={"https://www.tiktok.com/@tikoghachava"}>
        <div className="w-10 h-10 flex justify-center items-center rounded-[50%] bg-white">
          <FaTiktok size={20} />
        </div>
      </Link>
    </>
  );
};

export default SocialItem;
