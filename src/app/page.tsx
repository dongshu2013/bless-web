import { Section1 } from "@/components/Section1";
import { Section2 } from "@/components/Section2";
import { Section3 } from "@/components/Section3";
import { Section4 } from "@/components/Section4";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

export default function Home() {
  return (
    <div className="relative">
      <div
        className={twMerge(
          "flex justify-center w-full h-full absolute top-0 left-0 right-0"
        )}
      >
        <div
          className={twMerge(
            "max-w-[1440px] w-full xl:w-[1440px] 2xl:w-[1440px] xl:px-10 px-0"
          )}
        >
          <Image
            src="/images/header-bg-mobile.png"
            alt="bg-home"
            width={1376}
            height={892}
            className="hidden md:block w-full object-cover rounded-[16px] overflow-hidden"
            style={{
              aspectRatio: "1376/892",
              height: "auto",
            }}
          />

          <Image
            src="/images/header-bg-mobile.png"
            alt="bg-home"
            width={375}
            height={577}
            className="block md:hidden w-full h-auto object-cover rounded-[16px] overflow-hidden"
            style={{
              aspectRatio: "375/577",
              height: "auto",
            }}
          />
        </div>
      </div>

      <Section1 />

      <Section2 />

      <Section3 />

      <Section4 />
    </div>
  );
}
