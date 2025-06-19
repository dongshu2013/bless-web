import Image from "next/image";
import { ContentWrapper } from "./ContentWrapper";
import Link from "next/link";
import { WEBSITE_LINKS } from "@/utils/constants";

export const Section4 = () => {
  return (
    <ContentWrapper className="xl:px-[60px] py-10 xl:py-[60px] relative">
      <Link href={WEBSITE_LINKS.app} target="_blank">
        <Image
          src="/images/buzz-start.png"
          alt="buzz-start"
          width={1440}
          height={617}
          className="hidden md:block w-[1440px] h-auto cursor-pointer"
        />

        <Image
          src="/images/buzz-start-mobile.png"
          alt="buzz-start"
          width={1440}
          height={617}
          className="block md:hidden w-full"
        />
      </Link>
    </ContentWrapper>
  );
};
