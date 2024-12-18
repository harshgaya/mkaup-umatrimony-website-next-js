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
export default function LetsCreate() {
  return (
    <div className="flex flex-col md:flex-row space-y-3 justify-between items-start  md:py-20 md:pr-20 mx-5">
      <Image
        src={"/home/steps/lets.png"}
        width={642}
        height={642}
        alt="steps"
      />
      <div>
        <h1
          className={`${philospher.className} text-3xl md:text-[48px] md:mb-5`}
        >
          YOU CAN HAVE YOUR
        </h1>
        <h1
          className={`${philospher.className} text-3xl md:text-[48px] text-customYellow2`}
        >
          OWN AFFILIATES
        </h1>
        <p className="text-sm text-customGrayColor md:w-[443px] mt-10">
          {CONNECTION_PARAGRAPH}
        </p>
      </div>
    </div>
  );
}
