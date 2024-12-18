"use client";
import Image from "next/image";
import { useState } from "react";
import { Phetsarath } from "next/font/google";
import { CONNECTION_PARAGRAPH } from "@/lib/constants";
import { useMediaQuery } from "react-responsive";

const phetsarath = Phetsarath({
  weight: "400",
  subsets: ["lao"],
});
const images = [
  {
    name: "Pooja and Shreyank",
    description: CONNECTION_PARAGRAPH,
    image: "/home/success-story/wed1.jpeg",
  },
  {
    name: "Arjun and Anjali",
    description: CONNECTION_PARAGRAPH,
    image: "/home/success-story/wed2.jpg",
  },
  {
    name: "Raghav and Priya",
    description: CONNECTION_PARAGRAPH,
    image: "/home/success-story/wed3.jpg",
  },
  {
    name: "Siddharth and Sneha",
    description: CONNECTION_PARAGRAPH,
    image: "/home/success-story/wed4.jpg",
  },
  {
    name: "Vikram and Kavya",
    description: CONNECTION_PARAGRAPH,
    image: "/home/success-story/wed5.webp",
  },
];

export default function SuccessStory() {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  function handleClick(index) {
    console.log("index", index);
    setSelectedImage(images[index]);
  }
  return (
    <div>
      {isMobile ? (
        <div className="bg-customBgSuccessStory px-3 py-10 relative my-10  mx-3 flex flex-col justify-center items-center">
          <Image
            className="absolute right-2 top-5"
            src={"/home/success-story/flower.png"}
            height={100}
            width={100}
            alt="flower"
          />
          <Image
            className="absolute left-2 bottom-1"
            src={"/home/success-story/flower.png"}
            height={80}
            width={80}
            alt="flower"
          />
          <div className="rounded-xl   bg-white px-3 py-3 ">
            <div className="flex flex-col justify-between items-center mt-5">
              <div>
                <h1
                  className={`${phetsarath.className} text-2xl  text-customYellow3 tracking-widest`}
                >
                  HAPPY STORIES
                </h1>
                <h1 className="font-bold text-customYellow1 text-xl mt-5">
                  {selectedImage.name}
                </h1>
                <div className="w-[200px] h-[300px] mt-5 rounded-full overflow-hidden relative">
                  <Image
                    src={selectedImage.image}
                    alt="marriage-couples"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="w-full h-89 space-x-5 flex">
                  {images.map((image, index) => {
                    return (
                      <div
                        key={image.name}
                        className="w-[50px] h-[50px] mt-5 rounded-full overflow-hidden relative"
                        onClick={() => handleClick(index)}
                      >
                        <Image
                          src={image.image}
                          alt="marriage-couples"
                          fill
                          className="object-cover"
                        />
                      </div>
                    );
                  })}
                </div>
                <p className="text-sm text-customGrayColor  mt-10">
                  {selectedImage.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-customBgSuccessStory px-10 relative h-[1000px] mb-36 flex justify-center items-center">
          <Image
            className="absolute right-2 top-5"
            src={"/home/success-story/flower.png"}
            height={289}
            width={322}
            alt="flower"
          />
          <Image
            className="absolute left-2 bottom-1"
            src={"/home/success-story/flower.png"}
            height={289}
            width={322}
            alt="flower"
          />
          <div className="rounded-xl w-full h-[700px] bg-white px-10 py-5">
            <div className="flex justify-between items-start mt-10">
              <div className="w-[293px] h-[400px] rounded-full overflow-hidden relative">
                <Image
                  src={selectedImage.image}
                  alt="marriage-couples"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h1
                  className={`${phetsarath.className} text-[48px]  text-customYellow3 tracking-widest`}
                >
                  HAPPY STORIES
                </h1>
                <h1 className="font-bold text-customYellow1 text-[48px] mt-16">
                  {selectedImage.name}
                </h1>
                <p className="text-sm text-customGrayColor w-[443px] mt-10">
                  {selectedImage.description}
                </p>
                <Image
                  className="mt-20"
                  src={"/home/success-story/line.png"}
                  height={44}
                  width={493}
                  alt="line"
                />
              </div>
              <div className="w-89 h-89 space-y-5">
                {images.map((image, index) => {
                  return (
                    <div
                      key={image.name}
                      className="w-[89px] h-[89px] rounded-full overflow-hidden relative"
                      onClick={() => handleClick(index)}
                    >
                      <Image
                        src={image.image}
                        alt="marriage-couples"
                        fill
                        className="object-cover"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
