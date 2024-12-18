"use client";
import { Milonga, Imprima } from "next/font/google";
import Image from "next/image";
import { WEBSITE_NAME } from "@/lib/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { useActionState } from "react";
import Modal from "../modal/modal";
import { addData } from "@/lib/action";
const milonga = Milonga({
  weight: "400",
  subsets: ["latin"],
});
const imprima = Imprima({
  weight: "400",
  subsets: ["latin"],
});

export default function Header() {
  const [message, formAction, pending] = useActionState(addData, null);
  const pathName = usePathname();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSideNavigationOpen, setSideNavigationIsOpen] = useState(false);

  function handleSideNaviagtion() {
    setSideNavigationIsOpen((prevState) => {
      return !prevState;
    });
  }

  function handleModalOpen() {
    setIsModalOpen(true);
  }
  function closeModal() {
    setIsModalOpen(false);
  }
  useEffect(() => {
    if (!pending && !message) {
      setIsModalOpen(false);
    }
  }, [pending, message]);

  return (
    <>
      {isModalOpen && (
        <Modal
          title={"Register for Munnuru Kapu Matrimony"}
          onClose={closeModal}
        >
          <form action={formAction}>
            <p>
              <label
                className="block text-sm text-slate-900 mb-1"
                htmlFor="title"
              >
                Name
              </label>
              <input
                className="w-full p-2 border rounded-md border-slate-300 mb-4"
                type="text"
                name="title"
                id="title"
                required
              />
            </p>

            <p>
              <label
                className="block text-sm text-slate-900 mb-1"
                htmlFor="description"
              >
                Description
              </label>
              <textarea
                className="w-full p-2 border rounded-md border-slate-300 mb-4"
                name="description"
                id="description"
                required
              />
            </p>
            <p>
              <label
                className="block text-sm text-slate-900 mb-1"
                htmlFor="mobile"
              >
                Mobile Number
              </label>
              <input
                className="w-full p-2 border rounded-md border-slate-300 mb-4"
                type="number"
                name="mobile"
                id="mobile"
                maxLength="10"
                inputMode="numeric"
                required
              />
            </p>
            <p className="flex space-x-4 justify-end">
              <button onClick={closeModal}>Cancel</button>
              <button
                disabled={pending}
                className="bg-red-600 rounded-md pt-3 pl-5 pr-5 pb-3 text-white"
              >
                {pending ? "Submitting" : "Submit"}
              </button>
            </p>
            {message && <p>{message}</p>}
          </form>
        </Modal>
      )}
      <nav className="pt-2 pb-2 pl-5 pr-5 shadow-md flex justify-between items-center">
        <ul className="flex space-x-3 justify-start items-center">
          <Image
            src={"/header/logo.png"}
            width={50}
            height={50}
            alt="matrimony logo"
          />

          <li
            className={`${milonga.className} text-xl mt-4 text-customYellow1`}
          >
            {WEBSITE_NAME}
          </li>
        </ul>
        <Image
          onClick={handleSideNaviagtion}
          src={"/header/menu.png"}
          width={30}
          height={30}
          alt="menu"
          className="md:hidden"
        />
        {isSideNavigationOpen && (
          <div
            onClick={handleSideNaviagtion}
            className="fixed inset-0 bg-black bg-opacity-50 z-30"
          ></div>
        )}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-customYellow2 pt-5 pl-5 z-50 ${
            isSideNavigationOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform`}
        >
          <ul className="flex flex-col justify-start items-start mt-4 space-y-3 text-white">
            <li
              className={
                pathName === "/" ? "text-white" : "text-black hover:text-white"
              }
            >
              <Link href="/">Home</Link>
            </li>
            <li
              className={
                pathName === "/about"
                  ? "text-white"
                  : "text-black hover:text-white"
              }
            >
              <Link href="/about">About</Link>
            </li>
            <li
              className={
                pathName === "/contact"
                  ? "text-white"
                  : "text-black hover:text-white"
              }
            >
              <Link href="/contact">Contact</Link>
            </li>
            <button
              onClick={handleModalOpen}
              className={`${imprima.className} rounded-md pt-2 pb-2 pl-16 pr-16 bg-white text-black`}
            >
              Register
            </button>
          </ul>
        </div>

        <ul className=" justify-start items-center mt-4 space-x-12 hidden md:flex">
          <li
            className={
              pathName === "/"
                ? "text-customYellow2"
                : "text-black hover:text-customYellow2"
            }
          >
            <Link href="/">Home</Link>
          </li>
          <li
            className={
              pathName === "/about"
                ? "text-customYellow2"
                : "text-black hover:text-customYellow2"
            }
          >
            <Link href="/about">About</Link>
          </li>
          <li
            className={
              pathName === "/contact"
                ? "text-customYellow2"
                : "text-black hover:text-customYellow2"
            }
          >
            <Link href="/contact">Contact</Link>
          </li>
          <button
            onClick={handleModalOpen}
            className={`${imprima.className} rounded-md pt-2 pb-2 pl-16 pr-16 bg-customYellow2 text-white`}
          >
            Register
          </button>
        </ul>
      </nav>
    </>
  );
}
