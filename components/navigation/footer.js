import {
  ADDRESS,
  facebookLink,
  instagramLink,
  whatsappLink,
} from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className="mx-5  flex flex-wrap flex-col md:flex-row justify-between items-start py-10 space-y-5 md:space-y-0">
        <div>
          <p className="font-bold text-xl mb-3">Help & Support</p>
          <ul className="space-y-1">
            <li className="hover:text-customYellow2">
              {" "}
              <Link href="/contact">Contact Us</Link>
            </li>
            <li className="hover:text-customYellow2">
              {" "}
              <Link href="/contact">Feedback</Link>
            </li>
            <li className="hover:text-customYellow2">
              <Link href="/about">FAQ</Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-bold text-xl mb-3">Information</p>
          <ul className="space-y-1">
            <li className="hover:text-customYellow2">
              <Link href="/about">About Us</Link>
            </li>
            <li className="hover:text-customYellow2">
              <Link href="/privacy">Privacy Policy</Link>
            </li>
            <li className="hover:text-customYellow2">
              <Link href="/terms">Terms & Condition</Link>
            </li>
            {/* <li className="hover:text-customYellow2">Success Stories</li> */}
          </ul>
        </div>
        <div>
          <p className="font-bold text-xl mb-3">Others</p>
          <ul className="space-y-1">
            <li className="hover:text-customYellow2">
              <Link href="/privacy">Privacy Policy</Link>
            </li>
            <li className="hover:text-customYellow2">
              <Link href="/terms">Terms & Condition</Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-bold text-xl mb-3">Head Office</p>
          <ul className="space-y-1">
            <li className="hover:text-customYellow2 w-24">{ADDRESS}</li>
          </ul>
        </div>
      </div>
      <div className="mx-5">
        <p className="text-base">Get Connected With Us</p>
        <div className="flex space-x-2 mt-3">
          <div>
            <Link href={whatsappLink}>
              <Image
                src={"/header/wa.png"}
                height={30}
                width={30}
                alt="whatsapp"
              />
            </Link>
          </div>

          <div>
            <Link href={facebookLink}>
              <Image
                src={"/header/fb.png"}
                height={30}
                width={30}
                alt="facebook"
              />
            </Link>
          </div>

          <div>
            <Link href={instagramLink}>
              <Image
                src={"/header/insta.png"}
                height={30}
                width={30}
                alt="instagram"
              />
            </Link>
          </div>
        </div>
        <div className="border-t-2 mt-10 border-gray-300 w-full"></div>
      </div>
    </>
  );
}
