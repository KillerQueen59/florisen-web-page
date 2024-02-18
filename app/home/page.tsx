"use client";
import Image from "next/image";
import { useState } from "react";

const HomePage = () => {
  const [hover, setHover] = useState("");
  const handleClickScroll = () => {
    const element = document.getElementById("jiko-2");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen pb-32">
      <div className="container grid grid-cols-2 gap-x-16 gap-y-4  mx-auto mt-8 ">
        <div className="my-auto ">
          <Image
            src={
              hover === "jiko" ? "aku-aku-aku.svg" : "ada-yang-mau-ikut-aku.svg"
            }
            alt="ada-yang-mau-ikut-aku"
            width={1600}
            height={800}
            className="mx-auto cursor-pointer"
            onMouseEnter={() => {
              setHover("jiko");
            }}
            onMouseLeave={() => {
              setHover("");
            }}
            onClick={() => {
              handleClickScroll();
            }}
          />
        </div>
        <Image
          src="/flora-pict-1.svg"
          alt="flora-pict-1"
          width={400}
          height={800}
          className="mx-auto"
        />
      </div>
      <div
        id="jiko-2"
        className="container grid grid-cols-2 gap-x-16 gap-y-4  mx-auto mt-8 "
      >
        <Image
          src="/flora-pict-2.svg"
          alt="flora-pict-2"
          width={400}
          height={800}
          className="mx-auto"
        />
        <Image
          src={"sim-salabim.svg"}
          alt="sim-salabim"
          width={1600}
          height={800}
          className="mx-auto my-auto cursor-pointer"
        />
      </div>
      <div className="mx-auto w-fit text-4xl font-semibold">Unit Song's</div>
      <div className="container grid grid-cols-3 gap-x-16 gap-y-4 mx-auto mt-8 ">
        <Image
          src="/hagavi.svg"
          alt="hagavi"
          width={400}
          height={800}
          className="mx-auto drop-shadow-2xl"
        />
        <Image
          src="/kebun-binatang.svg"
          alt="kebun-binatang"
          width={400}
          height={800}
          className="mx-auto drop-shadow-2xl"
        />
      </div>
    </div>
  );
};

export default HomePage;
