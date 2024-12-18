import { aboutPara, NAME, VISION } from "@/lib/constants";
import { Philosopher, Great_Vibes } from "next/font/google";
import Image from "next/image";

const philospher = Philosopher({
  weight: "400",
  subsets: ["latin"],
});
const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
});
export default function About() {
  return (
    <>
      <div className=" flex flex-col space-y-3 md:flex-row md:h-[900px]  bg-customYellow2 px-5 py-5  justify-between items-start">
        <div className="md:w-[400px]">
          <h1
            className={`${philospher.className} text-3xl md:text-[48px] text-white md:leading-tight`}
          >
            I REALLY LOVE TO TALK WITH PEOPLE
          </h1>
          <p className={`${greatVibes.className} text-[36px] mt-10`}>{NAME}</p>
          <div className="mt-20">
            <p className="font-bold text-2xl">Follow Us</p>
            <div className="w-100 md:w-282 h-[0.1px] bg-black"></div>
            <div className="flex justify-between">
              {" "}
              <p className="text-xl">Instagram</p>
              <Image
                src={"/home/about/arrow-2.png"}
                height={30}
                width={30}
                alt="arrow-icon"
              />
            </div>
            <div className="w-100 md:w-282 h-[0.1px] bg-black"></div>
            <div className="flex justify-between">
              {" "}
              <p className="text-xl">YouTube</p>
              <Image
                src={"/home/about/arrow-2.png"}
                height={30}
                width={30}
                alt="arrow-icon"
              />
            </div>
          </div>
        </div>
        <div>
          <Image
            src={"/home/about/dadi.png"}
            height={583}
            width={583}
            alt="old lady"
          />
          <p className="md:w-[583px] mt-10 first-letter:font-bold first-letter:text-5xl">
            {aboutPara}
          </p>
        </div>
      </div>
      <div className="mt-36 md:h-[666px] w-[cal(100%-50px)] ml-5 md:ml-[50px] bg-customYellow2 pl-10 pb-10 md:pl-[200px] pt-10 pr-10 relative mb-[300px]">
        <h1 className="text-white text-3xl md:text-[48px]">VISION & MISSION</h1>
        <p className="pt-20">{VISION}</p>
        <iframe
          className="absolute bottom-[-200px] md:bottom[-200px] left-0 w-[300px] h-[300px]  md:w-[722px] md:h-[475px] mt-20"
          src="https://www.youtube.com/embed/V1n3xcDCBuM"
          title="YouTube Video Player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      {/* <div className="ml-52">
        <h1 className={`${philospher.className} text-[48px] mb-10`}>
          Frequently Asked Questions
        </h1>
        <div className="flex space-x-3 items-start mb-10">
          <Image
            src={"/home/about/question.png"}
            width={110}
            height={110}
            alt="question-mark"
          />
          <div>
            <h1 className="text-[30px] w-[700px] font-bold">
              What is Munnur Kapu Matrimony?
            </h1>
            <p className="w-[700px]">
              Munnur Kapu Matrimony is a dedicated matrimonial platform designed
              to connect individuals and families within the Munnur Kapu
              community. We aim to help members find compatible life partners
              while upholding cultural values and traditions.
            </p>
          </div>
        </div>
        <div className="flex space-x-3 items-start mb-10">
          <Image
            src={"/home/about/question.png"}
            width={110}
            height={110}
            alt="question-mark"
          />
          <div>
            <h1 className="text-[30px] w-[700px] font-bold">
              How does Munnur Kapu Matrimony ensure privacy and security?
            </h1>
            <p className="w-[700px]">
              We prioritize the privacy and security of our users. Personal
              information and contact details are kept confidential and shared
              only with mutual consent. Our platform uses robust security
              measures to protect user data.
            </p>
          </div>
        </div>
        <div className="flex space-x-3 items-start mb-10">
          <Image
            src={"/home/about/question.png"}
            width={110}
            height={110}
            alt="question-mark"
          />
          <div>
            <h1 className="w-[700px] text-[30px] font-bold">
              Is there any support available for users during the matchmaking
              process?
            </h1>
            <p className="w-[700px]">
              Absolutely! Our dedicated customer support team is available to
              assist you with any questions or issues, ensuring a smooth and
              hassle-free experience.
            </p>
          </div>
        </div>
      </div> */}
    </>
  );
}
