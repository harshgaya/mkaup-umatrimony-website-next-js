import { INTRO_HEADING, INTRO_PARAGRAPH } from "@/lib/constants";
import Image from "next/image";
import { Philosopher } from "next/font/google";

const philospher = Philosopher({
  weight: "400",
  subsets: ["latin"],
});

export default function Intro() {
  return (
    <div className="flex flex-col mt-10 mx-5 md:flex md:flex-row justify-between items-start mb-40 space-y-10 md:space-x-0">
      <div>
        <Image
          src={"/home/intro/arrow.png"}
          height={26}
          width={112}
          alt="arrow-image"
        ></Image>
        <div className="w-full md:w-[470px]">
          <div className="relative">
            <h1
              className={`${philospher.className} text-3xl md:text-[48px] text-customYellow3 leading-normal tracking-widest relative`}
            >
              {INTRO_HEADING}
            </h1>
            <Image
              src={"/home/intro/heart_yellow.png"}
              width={51}
              height={55}
              alt="heart"
              className="absolute top-[-40px] right-0"
            ></Image>
          </div>
          <p className="text-2xl md:text-[32px] text-customGrayColor my-5">
            {INTRO_PARAGRAPH}
          </p>
          <div className="w-full h-[100px] md:w-[600px] md:h-[150px] bg-customYellow4 rounded-lg flex justify-between items-center px-5 mt-10">
            <div>
              <h1 className="text-2xl md:text-[48px] text-white">5+</h1>
              <p className="text-sm md:text-xl text-white">
                Years of Experience
              </p>
            </div>
            <div>
              <h1 className="text-2xl md:text-[48px] text-white">50+</h1>
              <p className="text-sm md:text-xl text-white">
                Marriages Assigned
              </p>
            </div>
            <div>
              <h1 className="text-2xl md:text-[48px] text-white">100+</h1>
              <p className="text-sm md:text-xl text-white">Happy Couples</p>
            </div>
          </div>
        </div>
      </div>
      <Image
        src={"/home/intro/intro_image.png"}
        height={540}
        width={457}
        alt="matrimony"
      />
    </div>
  );
}
