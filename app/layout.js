import Header from "@/components/navigation/header";
import "./globals.css";
import Footer from "@/components/navigation/footer";
import { Philosopher } from "next/font/google";
import { BreadcrumbJsonLd } from "next-seo";

export const metadata = {
  title: "Munnuru Kapu Matrimony",
  description: "Munnuru Kapu Matrimony for Munnur Kapu Caste in Telgu",
  keywords:
    "Munnuru Kapu Matrimony, India Matrimony, Telgu Matrimony, Shaadi, Bharat Matrimony, Shaadi.com, Tamil Matrimony",
  authors: [{ name: "Munnuru Kapu Matrimony", url: "" }],
  creator: "Munnuru Kapu Matrimony",
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "Munnuru Kapu Matrimony",
    description: "Munnuru Kapu Matrimony for Munnur Kapu Caste in Telgu",
    url: "",
    type: "website",
    siteName: "Munnuru Kapu Matrimony",
    images: [
      {
        url: "/header/logo.png",
        width: 1200,
        height: 630,
        alt: "Munnuru Kapu Matrimony",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Munnuru Kapu Matrimony",
    title: "Munnuru Kapu Matrimony",
    description: "Munnuru Kapu Matrimony for Munnur Kapu Caste in Telgu",
    images: ["/header/logo.png"],
  },
  icons: {
    icon: "/header/logo.png",
    apple: "/header/logo.png",
  },
  alternates: {
    canonical: "",
    languages: {
      en: "",
    },
  },
};

const philospher = Philosopher({
  weight: "400",
  subsets: ["latin"],
});
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <BreadcrumbJsonLd
        useAppDir={true}
        itemListElements={[
          {
            position: 1,
            name: "Munnuru Kapu Matrimony",
            item: "https://muunurkapumatrimony.com/",
          },
          {
            position: 2,
            name: "About",
            item: "https://muunurkapumatrimony.com/about",
          },
          {
            position: 1,
            name: "Contact",
            item: "https://muunurkapumatrimony.com/contact",
          },
        ]}
      />
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
