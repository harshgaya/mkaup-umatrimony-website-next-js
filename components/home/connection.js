import Image from "next/image";
import { Philosopher, Phetsarath } from "next/font/google";
import { CONNECTION_PARAGRAPH } from "@/lib/constants";
const philospher = Philosopher({
  weight: "400",
  subsets: ["latin"],
});
const phetsarath = Phetsarath({
  weight: "400",
  subsets: ["lao"],
});
export default function Connection() {
  return (
    <div className="flex flex-col space-y-3 md:flex-row justify-between items-start  py-20 pl-5 pr-5 md:pr-0 md:pl-20">
      <div>
        <h1
          className={`${philospher.className} text-3xl md:text-[48px] md:mb-5`}
        >
          YOUR LIFE STORY
        </h1>
        <h1
          className={`${philospher.className} text-3xl md:text-[48px] text-customYellow2`}
        >
          BEGINS HERE
        </h1>
        <p className="text-sm text-customGrayColor md:w-[443px] mt-10">
          {CONNECTION_PARAGRAPH}
        </p>
      </div>
      <Image
        src={"/home/steps/circle.png"}
        width={642}
        height={642}
        alt="steps"
      />
    </div>
  );
}
