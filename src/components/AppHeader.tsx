"use client";

import { WEBSITE_LINKS } from "@/utils/constants";
import { bold500Font } from "@/utils/fontUtils";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { ContentWrapper } from "./ContentWrapper";

export const AppHeader = () => {
  const [hide, setHide] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Common scroll listener
  useEffect(() => {
    var lastScrollTop = 0;
    const scrollThreshold = 50; // Set your desired threshold in pixels

    const scrollListener = () => {
      // or window.addEventListener("scroll"....
      var st = window.pageYOffset || document.documentElement.scrollTop;

      // Update scrolled state based on threshold
      setIsScrolled(st > scrollThreshold);

      if (st > lastScrollTop) {
        // console.log("downscroll");
        setHide(true);
        // downscroll code
      } else if (st < lastScrollTop) {
        // console.log("upscroll");
        setHide(false);
        // upscroll code
      } // else was horizontal scroll
      lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
    };
    // element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
    window.addEventListener("scroll", scrollListener, false);
    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  return (
    <div
      className={twMerge(
        "h-[var(--header-height-mobile)] md:h-[var(--header-height)]",
        "z-20 fixed left-0 right-0",
        "top-0 md:top-6",
        // hide ? "-translate-y-[var(--header-height)]" : "",
        "transition-common"
      )}
    >
      <ContentWrapper className="px-0 xl:px-[90px]">
        <div className="flex items-center justify-between bg-white md:rounded-[16px] border border-[#D0D0FF] py-2">
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="logo-with-text.svg"
                alt="logo"
                width={200}
                height={60}
                className="w-[100px] xl:w-[210px] ml-6"
              />
            </Link>

            <div className="md:flex hidden items-center ml-5">
              <div className="h-5 w-[1px] bg-[#9D9D9D]" />

              <Link href="#about">
                <div
                  className={classNames(
                    "ml-8 text-[16px] leading-normal ",
                    bold500Font.className
                  )}
                >
                  About
                </div>
              </Link>

              <Link href="#features">
                <div
                  className={classNames(
                    "ml-8 text-[16px] leading-normal ",
                    bold500Font.className
                  )}
                >
                  Features
                </div>
              </Link>

              <Link href={WEBSITE_LINKS.docs} target="_blank">
                <div
                  className={classNames(
                    "ml-8 text-[16px] leading-normal ",
                    bold500Font.className
                  )}
                >
                  How to play
                </div>
              </Link>
            </div>
          </div>

          <Link href={WEBSITE_LINKS.app} target="_blank">
            <div className="mr-4 primary-button-container">
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
                  "button-text-small text-white relative z-10",
                  bold500Font.className
                )}
              >
                Launch App
              </div>
            </div>
          </Link>
        </div>
      </ContentWrapper>

    </div>
  );
};
