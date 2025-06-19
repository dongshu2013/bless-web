import Image from "next/image";
import { ContentWrapper } from "./ContentWrapper";
import classNames from "classnames";
import { bold500Font } from "@/utils/fontUtils";

export const Section2 = () => {
  return (
    <ContentWrapper className="pb-5 md:pb-10 xl:pb-10 z-10">
      <div
        id="about"
        className="mt-[10px] md:mt-[54px] flex flex-col items-center justify-center scroll-mt-30"
      >
        <div className="flex items-center justify-center rounded-full bg-[#F6F1FF] py-[6px] px-8">
          <div
            className={classNames(
              "uppercase text-[14px] leading-none text-primary",
              bold500Font.className
            )}
          >
            About Buzzline
          </div>
        </div>

        <div
          className={classNames(
            "mt-4 text-[28px] md:text-[42px] text-center leading-none max-w-[300px] md:max-w-full",
            bold500Font.className
          )}
        >
          AI-Powered Social Growth Engine
        </div>

        <div
          className={classNames(
            "mt-6 max-w-[830px] text-[16px] text-center leading-normal text-[var(--text-default-2)]",
            bold500Font.className
          )}
        >
          Integrating task incentives, KOL traffic & AI content tools to help
          projects launch social tasks. Empowers communities to create, engage &
          boost visibility effortlessly.
        </div>
      </div>
    </ContentWrapper>
  );
};
