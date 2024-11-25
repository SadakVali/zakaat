import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";

import iPhoneHero from "@/../public/iPhoneHero.png";
import GooglePlay from "@/../public/googlePlay.png";
import AppStore from "@/../public/appStore.png";
import Link from "next/link";
import Pill from "./Pill";

export default function HeroSection() {
  return (
    <div
      className="mb-64 flex items-center justify-between gap-x-4 gap-y-11 flex-col md:flex-row"
      style={{ marginLeft: "clamp(1rem, 4.9vw, 5rem)" }}
    >
      <div
        className="flex flex-col"
        style={{ rowGap: "clamp(45px, 6.05vw, 90px)" }}
      >
        <div className="flex flex-col _1732552838251">
          <Pill
            text="✨ Find Deserving Zakaat Recipients Here"
            style={{
              paddingTop: "clamp(6px, 0.66vw, 8px)",
              paddingBottom: "clamp(6px, 0.66vw, 8px)",
            }}
          />
          <h1
            className="leading-none font-bold"
            style={{ fontSize: "clamp(35px, 4.53vw, 65px)" }}
          >
            <span className="text-blue-200">Maximize Your Zakaat Impact, </span>
            <span className="text-purple-200">
              Support the Deserving Muslims in Need
            </span>
          </h1>
          <p
            className="text-xl leading-[26px] text-blue-100"
            style={{ fontSize: "clamp(16px, 1.7vw, 20px)" }}
          >
            Fulfill your duty of Zakat with purpose, backed by the power of
            Artificial Intelligence. Our platform ensures your contributions
            reach truly deserving Muslims by safeguarding against fraudulent
            applications. Connect with those genuinely in need, all for the sake
            of Allah and the upliftment of our community.
          </p>
        </div>
        <div className="flex gap-4 justify-center">
          <Link href={"#"}>
            <Image
              src={AppStore}
              alt="App Store"
              style={{
                objectFit: "cover",
                width: "clamp(139px, 15.08vw, 181px)",
              }}
            />
          </Link>
          <Link href={"#"}>
            <Image
              src={GooglePlay}
              alt="Google Play"
              style={{
                objectFit: "cover",
                width: "clamp(139px, 15.08vw, 181px)",
              }}
            />
          </Link>
        </div>
      </div>
      <Image
        alt="Hero iPhone"
        src={iPhoneHero}
        // style={{ objectFit: "cover", width: "clamp(233px, 28vw, 370px)" }}
        className="_1732555389106"
      />
    </div>
  );
}
