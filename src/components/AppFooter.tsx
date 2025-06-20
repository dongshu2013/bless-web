import { SOCIAL_LINKS, WEBSITE_LINKS } from "@/utils/constants";
import { bold500Font, regularFont } from "@/utils/fontUtils";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { ContentWrapper } from "./ContentWrapper";

export const AppFooter = () => {
  return (
    <div className={classNames("relative")}>
      <ContentWrapper className="xl:px-[70px] ">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex flex-col items-center md:items-start">
            <Image
              src="logo-with-text.svg"
              alt="logo"
              width={200}
              height={60}
              className="w-[180px] xl:w-[210px] md:-ml-3"
            />

            <div
              className={classNames(
                "mt-2 max-w-[560px] text-[16px] leading-normal text-[var(--text-default-2)] text-center md:text-left",
                bold500Font.className
              )}
            >
              Buzzline combines task incentives, KOL traffic, and AI content
              creation. It lets projects launch social tasks where KOLs,
              holders, and users participate with AI assistance - improving
              content quality and boosting engagement.
            </div>
          </div>

          <div className="flex flex-col items-end">
            <div
              className={classNames(
                "hidden md:block text-[24px] leading-none",
                bold500Font.className
              )}
            >
              Social Media
            </div>

            <div className="flex items-center gap-2 mt-8 md:mt-6">
              {/* <Image
                src="/images/social/ins.svg"
                alt="ins"
                width={40}
                height={40}
                className="cursor-pointer active:scale-95 transition-common w-8 h-8"
              />

              <Image
                src="/images/social/facebook.svg"
                alt="facebook"
                width={40}
                height={40}
                className="cursor-pointer active:scale-95 transition-common w-8 h-8"
              /> */}

              <Link href={SOCIAL_LINKS.x} target="_blank">
                <Image
                  src="/images/social/twitter.svg"
                  alt="twitter"
                  width={40}
                  height={40}
                  className="cursor-pointer active:scale-95 transition-common w-8 h-8"
                />
              </Link>

              {/* <Image
                src="/images/social/linkedin.svg"
                alt="linkedin"
                width={40}
                height={40}
                className="cursor-pointer active:scale-95 transition-common w-8 h-8"
              /> */}
            </div>
          </div>
        </div>
      </ContentWrapper>

      <div className="bg-[#000000]/10 h-[1px] w-full mt-[40px] md:mt-[55px]" />

      <ContentWrapper className="xl:px-[70px] pb-8">
        <div className="mt-3 md:mt-9 flex flex-col md:flex-row items-center justify-between text-[14px] md:text-[18px]">
          <div className={classNames(" leading-normal ")}>
            ©2025 Buzzline All right reserved.
          </div>

          <Link href="/terms" className={classNames("leading-normal ")}>
            Privacy and Policy
          </Link>
        </div>
      </ContentWrapper>
    </div>
  );
};
