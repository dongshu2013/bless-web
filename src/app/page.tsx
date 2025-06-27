import { AppFooter } from "@/components/AppFooter";
import { Contact } from "@/components/Contact";
import { QA } from "@/components/QA";
import { Section1 } from "@/components/Section1";
import { Section2 } from "@/components/Section2";
import { Section3 } from "@/components/Section3";
import { Section4 } from "@/components/Section4";
import { ServiceContent } from "@/components/ServiceContent";
import UserComments from "@/components/UserComments";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative">
      {/* <Section1 /> */}

      <div className="bg-[#FBE791] flex flex-col items-center h-[600px]">
        <div className="pt-[30px] md:pt-[58px] text-center text-[24px] md:text-[60px] font-semibold text-[var(--color-primary)]">
          为你挚爱的人，点一盏真正的心灯
        </div>

        <div className="mt-3 md:mt-5 text-[var(--color-primary)]/80 text-[12px] md:text-[24px]">
          全球华人专属真实祈福平台｜真实寺庙｜视频记录｜人文关怀
        </div>

        <Image
          src="/images/god.png"
          alt="god"
          width={1100}
          height={640}
          className="mt-[40px] md:mt-[70px] w-full xl:w-[1100px] h-auto"
        />
      </div>

      <div className="-mt-[290px] md:-mt-[100px] relative">
        <div className="relative z-10">
          <div className="flex">
            <div className="flex-1">
              <Image
                src="/images/god-bottom-line1.svg"
                alt="god"
                width={960}
                height={355}
                className="w-full h-auto"
              />
            </div>

            <div className="flex-1">
              <Image
                src="/images/god-bottom-line2.svg"
                alt="god"
                width={960}
                height={355}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        <div
          className="absolute left-0 right-0 w-full bottom-0 self-stretch top-[0] overflow-hidden"
          // style={{
          //   // backdropFilter: "blur(500px)",
          //   backgroundImage: "url('/images/page-bg.svg')",
          //   backgroundSize: "100% 100%",
          //   backgroundPosition: "top",
          //   backgroundRepeat: "repeat-y",
          // }}
        >
          <Image
            src="/images/page-bg.svg"
            alt="background"
            width={1921}
            height={6320}
            className="w-full h-auto"
          />

          <div
            className="-mt-[0.5px] h-[5000px] bg-[#283f38]"
            style={
              {
                // background: "rgba(0, 33, 39, 0.85) 100%",
              }
            }
          />
        </div>

        <Section2 />

        <Section3 />

        <Section4 />

        <ServiceContent />

        <UserComments />

        <QA />

        <Contact />
      </div>

      <AppFooter />
    </div>
  );
}
