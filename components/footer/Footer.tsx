import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineYoutube,
} from "react-icons/ai";
import { FaTshirt } from "react-icons/fa";
import {
  IoFastFood,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTwitter,
  IoLogoWhatsapp,
} from "react-icons/io5";

const Footer = () => {
  return (
    <footer className=" w-full px-5 lg:px-10 bg-neutral-900 text-gray-300 text-xs py-6">
      <main className="flex flex-col md:flex-row gap-y-10 my-10 relative items-center gap-x-5 lg:gap-x-10  w-full">
        <div className="grid grid-cols-2 gap-y-5 lg:grid-cols-4 w-full capitalize">
          <div className="flex text-neutral-500 flex-col gap-y-4">
            <h3 className="text-white">stories</h3>
            <p>blogs</p>
            <p>store locator</p>
            <p>education</p>
            <p>exclusive</p>
            <p>newsletter</p>
            <p>programmes</p>
            <p>omo</p>
          </div>
          <div className="flex text-neutral-500 flex-col gap-y-4">
            <h3 className="text-white">explore</h3>
            <p>technology</p>
            <p>chrome</p>
            <p>concepts</p>
            <p>exports</p>
            <p>collabs</p>
          </div>
          <div className="flex text-neutral-500 flex-col gap-y-4">
            <h3 className="text-white">support</h3>

            <p>Get Help</p>
            <p>Registration & Warranty</p>
            <p>RazerStore Support</p>
            <p>RazerCare</p>
            <p>Manage Razer ID</p>
            <p>Support Videos</p>
            <p>Accessibility Statement</p>
          </div>
          <div className="flex text-neutral-500 flex-col gap-y-4">
            <h3 className="text-white">company</h3>

            <p>About Us</p>
            <p>Careers</p>
            <p>Press Room</p>
            <p>Ventures</p>
            <p>Contact Us</p>
          </div>
        </div>
        <div className="xs:w-[350px] lg:mb-56 flex items-start justify-start">
          <p className=" text-green-500">FOR BLOGGERs. BY OSSY.™</p>
        </div>
      </main>

      <main className="border-t capitalize py-5 flex flex-col md:flex-row justify-between text-center gap-y-4">
        <div>
        <p>Copyright © 2023 Ossy. All rights reserved.</p>

        </div>
        <div className="flex justify-center items-center gap-x-5">
          <p>site map</p>
          <p>legal</p>
          <p>privacy policy</p>
          <p>settings</p>
        </div>

        <div className="flex justify-center items-center gap-x-5">
          <p>usa</p>
          <p>change location</p>
        </div>
      </main>
    </footer>
  );
};

export default Footer;
