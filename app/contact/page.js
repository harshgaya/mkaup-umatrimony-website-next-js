import { EMAIL, PHONE } from "@/lib/constants";
import { Philosopher, Imprima } from "next/font/google";

const philospher = Philosopher({
  weight: "400",
  subsets: ["latin"],
});
const imprima = Imprima({
  weight: "400",
  subsets: ["latin"],
});
export default function Contact() {
  return (
    <div className="flex flex-col space-y-5 md:flex-row md:h-[625px] w-screen px-5 bg-customYellow2 py-5  justify-between items-start">
      <div className="text-white md:w-[327px]">
        <h1
          className={`${philospher.className} text-3xl md:text-[48px] text-white`}
        >
          CONTACT US
        </h1>
        <p className="mt-5">
          Email, call or complete the form to learn how Matrimony can solve your
          problem.
        </p>
        <p className="mt-5">{EMAIL}</p>
        <p className="mt-5">{PHONE}</p>
      </div>
      <form className="rounded-2xl shadow-md px-5 py-3 bg-white md:w-[374px]">
        <h1 className="text-2xl md:text-[36px] ">GET IN TOUCH</h1>
        <p>You can reach us anytime</p>
        <label className="block text-customGrayColor mt-3" htmlFor="name">
          Name
        </label>
        <input
          className="p-2 mt-2 w-full border rounded-2xl border-customGrayColor"
          type="text"
          name="title"
          id="title"
          placeholder="Enter Your Name."
          required
        ></input>
        <label className="block text-customGrayColor mt-3" htmlFor="mobile">
          Mobile
        </label>
        <input
          className="p-2 mt-2 w-full border rounded-2xl border-customGrayColor [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
          type="number"
          name="mobile"
          id="mobile"
          maxLength="10"
          placeholder="Enter Your Mobile."
          required
        ></input>
        <label
          className="block text-customGrayColor mt-3"
          htmlFor="description"
        >
          Description
        </label>
        <textarea
          className="p-2 mt-2 w-full border rounded-2xl border-customGrayColor"
          type="text"
          name="description"
          id="description"
          placeholder="How can we help you?"
          required
        ></textarea>
        <button
          className={`${imprima.className} rounded-3xl px-5 py-3 bg-customYellow2 text-white w-full mt-5`}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
