import { homedatadetails } from "@/utils/homedata";
import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Hero = () => {
  return (
    <Carousel
      infiniteLoop={true}
      autoPlay={true}
      showThumbs={false}
      showIndicators={false}
      showStatus={false}
    >
      {homedatadetails.map((item, id) => (
        <>
          <div
            key={item.id}
            className="flex flex-col h-[70vh] md:h-[87vh] relative w-full"
          >
            <Image
              src={item.image}
              alt="this is a slider image"
              width="1000"
              height="1000"
              className="w-full absolute object-cover h-full"
            />
          </div>
        </>
      ))}
    </Carousel>
  );
};

export default Hero;
