import React from "react";
import { MdOutlineMonitor } from "react-icons/md";
import { IoMdHeartEmpty } from "react-icons/io";
import { GoComment } from "react-icons/go";
import { AiOutlineComment, AiOutlineHeart } from "react-icons/ai";

const HeroBottom = () => {
  return (
    <main className="relative">
      <div className="max-w-4xl mx-auto -mt-44 flex flex-col gap-10 lg:gap-0 justify-center items-center h-auto lg:h-60 bg-gray-800 text-white py-10 px-3 md:px-8 z-10">
        <div className="w-full flex flex-col gap-3">
          <p className="text-sm uppercase font-semibold text-white/50">
            Trending NEws
          </p>
          <h3 className="font-bold capitalize text-xl md:text-3xl">
            Typescript is currently trending and e dey gba
          </h3>
          <p className="text-xs text-white/50">by: Codingossy / 2 days ago</p>
          {/* socials */}
          <div className="flex items-center gap-x-4 my-4">
            <span>
              <AiOutlineHeart
                size={20}
                className="hover:text-red-500 cursor-pointer"
              />
            </span>
            <span className="flex items-center cursor-pointer hover:text-green-500 gap-x-1">
              <AiOutlineComment size={20} />
              <p>send comment</p>
            </span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroBottom;
