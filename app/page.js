import Connection from "@/components/home/connection";
import Intro from "@/components/home/intro";
import LetsCreate from "@/components/home/lets-create";
import Steps from "@/components/home/steps";
import SuccessStory from "@/components/home/success-story";

export default function Home() {
  return (
    <>
      <Intro />
      <Steps />
      <Connection />
      <LetsCreate />
      <SuccessStory />
    </>
  );
}
