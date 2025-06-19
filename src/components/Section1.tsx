import Image from "next/image";
import { ContentWrapper } from "./ContentWrapper";
import classNames from "classnames";
import { bold500Font } from "@/utils/fontUtils";
import Link from "next/link";
import { WEBSITE_LINKS } from "@/utils/constants";

export const Section1 = () => {
  return (
    <ContentWrapper className="px-0 xl:px-[80px] mt-[var(--header-height-mobile)] md:mt-[var(--header-height)] pb-10 xl:pb-10 z-10">
      <div className="mt-[30px] md:mt-[54px] flex flex-col items-center justify-center">
        <Image
          src="/images/kol-card.png"
          alt="section1-bg"
          width={289}
          height={51}
          className="w-[184px] md:w-[289px] h-auto"
        />

        <div
          className={classNames(
            "mt-5 text-[28px] md:text-[72px] text-center leading-none",
            bold500Font.className
          )}
        >
          Activate Your Intelligent <br />
          Influence
        </div>

        <div
          className={classNames(
            "mt-4 text-[16px] text-center px-4 leading-normal md:leading-normal text-[var(--text-default-2)]"
          )}
        >
          Harness AI-driven task automation and KOL synergy to transform every
          interaction into on-chain value—welcome to the future of crypto
          social.
        </div>

        <div className="self-stretch md:self-center mx-4 mt-8 flex items-center gap-3 md:gap-6">
          <Link
            href={WEBSITE_LINKS.app}
            target="_blank"
            className="flex-1 md:flex-none"
          >
            <div className="primary-button-container-rounded">
              <div
                className="absolute inset-0 w-full h-full rounded-full"
                style={{
                  background: "#82E4F8",
                  filter: "blur(39px)",
                  opacity: 0.6,
                  zIndex: -1,
                }}
              />
              <div
                className={classNames(
                  "button-text text-white relative z-10",
                  bold500Font.className
                )}
              >
                Get Started
              </div>
            </div>
          </Link>

          <Link
            href={WEBSITE_LINKS.docs}
            target="_blank"
            className="flex-1 md:flex-none"
          >
            <div className="secondary-button-container-rounded">
              <div
                className={classNames(
                  "button-text relative z-10",
                  bold500Font.className
                )}
              >
                Learn More
              </div>
            </div>
          </Link>
        </div>

        <div className="lg:w-[1024px] h-auto mt-[56px] mx-4 lg:mx-0">
          <Image
            src="/images/buzzline-screenshot.png"
            alt="buzzline-screenshot"
            width={1084}
            height={674}
            className="w-full"
          />
        </div>
      </div>
    </ContentWrapper>
  );
};
