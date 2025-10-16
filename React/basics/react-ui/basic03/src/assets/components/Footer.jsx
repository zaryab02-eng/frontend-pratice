import Logo from "../gallery/logo.png";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className=" w-[100] h-72 py-1 flex justify-around space-x-[-35rem] bg-gray-900 ">
        <div className="w-[23rem] h-max p-1.5">
          <img src={Logo} alt="logo" className="h-24" />
          <p className="text-[0.8rem]">
            Z-Store brings you the latest electronic gadgets that make everyday
            life easier and smarter. From wireless earbuds and power banks to
            smartwatches and speakers, every product is chosen for quality,
            performance, and style. Whether you are upgrading your setup or
            finding the perfect gift, Z-Store delivers trusted brands and fast
            service at prices that fit your budget. Explore the collection and
            stay powered, connected, and ahead of the trend.
          </p>
        </div>
        <div className="w-max h-max py-7">
          <h4 className="text-[18px] font-semibold">Products</h4>
          <div className="flex flex-col py-5">
            <a href="#">Laptops</a>
            <a href="#">Smartphones</a>
            <a href="#">Accessories</a>
            <a href="#">Audio</a>
            <a href="#">Wearables</a>
          </div>
        </div>
        <div className="w-max h-max py-7">
          <h4 className="text-[18px] font-semibold">Company</h4>
          <div className="flex flex-col py-5">
            <a href="#">About Us</a>
            <a href="#">Career</a>
            <a href="#">Blog</a>
            <a href="#">Press</a>
          </div>
        </div>
        <div className="w-max h-max py-7">
          <h4 className="text-[18px] font-semibold">Support</h4>
          <div className="flex flex-col py-5">
            <a href="#">Help Center</a>
            <a href="#">Shipping</a>
            <a href="#">Returns</a>
            <a href="#">Sales</a>
          </div>
        </div>
      </div>
      <div className="bg-gray-950 text-center p-3 flex flex-col gap-y-2">
        <div className="flex space-x-3 justify-center text-2xl">
          <FaInstagram />
          <FaXTwitter />
          <FaGithub />
          <FaFacebook />
        </div>
        © 2025 Z-Store All rights reserved
      </div>
    </div>
  );
};

export default Footer;
