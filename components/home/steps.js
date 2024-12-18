import Image from "next/image";
import { Philosopher, Phetsarath } from "next/font/google";
const philospher = Philosopher({
  weight: "400",
  subsets: ["latin"],
});
const phetsarath = Phetsarath({
  weight: "400",
  subsets: ["lao"],
});

export default function Steps() {
  return (
    <div className="space-y-5 mx-5 flex flex-col md:flex-row justify-between items-start bg-customBgColor py-20  md:pr-20 px-3">
      <Image
        src={"/home/steps/steps.png"}
        width={665}
        height={685}
        alt="steps"
      />
      <div>
        <h1
          className={`${philospher.className} text-3xl md:text-[48px] md:mb-5 `}
        >
          YOUR LIFE STORY
        </h1>
        <h1
          className={`${philospher.className} text-3xl md:text-[48px] text-customYellow2`}
        >
          BEGINS HERE
        </h1>
        <div className="rounded-3xl border border-customBorderColor py-2 px-5 mt-10 inline-block">
          <p className={`${phetsarath.className} tracking-widest`}>
            3 STEP FOR SUCCESS STORIES
          </p>
        </div>
        <div className="mt-10 flex space-x-3">
          <Image
            src={"/home/steps/steps-2.png"}
            height={272}
            width={68}
            alt="steps"
          />
          <div className="flex flex-col justify-between h-[260px]">
            <div>
              <h1 className="text-lg md:text-xl">CREATE A PROFILE</h1>
              <p className="text-sm text-customGrayColor">Secure and Trusted</p>
            </div>
            <div>
              <h1 className="text-lg md:text-xl">SEARCH FOR PROFILE</h1>
              <p className="text-sm text-customGrayColor">
                Manually Verified Profiles
              </p>
            </div>
            <div>
              <h1 className="text-lg md:text-xl">START INTERACTING</h1>
              <p className="text-sm text-customGrayColor">
                Exclusive matrimonial
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
