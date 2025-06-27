"use client";

import { twMerge } from "tailwind-merge";

interface props {
  wrapperClassName?: string;
  className?: string;
}

export const ContentWrapper = ({
  children,
  className,
  wrapperClassName,
}: { children: React.ReactNode } & props) => {
  return (
    <div
      className={twMerge("flex justify-center w-full h-full", wrapperClassName)}
    >
      <div
        className={twMerge(
          "max-w-[1440px] w-full xl:w-[1440px] 2xl:w-[1440px] px-4 md:px-5 xl:px-10",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
};
