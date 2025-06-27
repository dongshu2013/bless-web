"use client";

import classNames from "classnames";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { ContentWrapper } from "./ContentWrapper";

export const AppHeader = () => {
  return (
    <div
      className={twMerge(
        "h-[60px] md:h-[90px] bg-[#FBE791] text-black border-b border-b-[#00000033] md:border-b-0"
      )}
    >
      <ContentWrapper className="px-4 xl:px-[40px] 2xl:px-[80px]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Menu className="w-6 text-[#00494F] cursor-pointer md:hidden" strokeWidth={3} />

            <Link href="/">
              <Image
                src="/logo.png"
                alt="logo"
                width={200}
                height={200}
                className="w-[46px] md:w-[72px]"
              />
            </Link>
          </div>

          <div className="hidden md:flex items-center">
            <div className="flex items-center gap-8 text-[16px] font-medium">
              <Link href="/">
                <div className={classNames("")}>首页</div>
              </Link>

              <Link href="#events">
                <div className={classNames("")}>活动</div>
              </Link>

              <Link href="#grow-road">
                <div className={classNames("")}>灵性成长路径</div>
              </Link>

              <Link href="#service">
                <div className={classNames("")}>服务内容</div>
              </Link>

              <Link href="#comments">
                <div className={classNames("")}>用户评价</div>
              </Link>

              <Link href="#qas">
                <div className={classNames("")}>常见问题</div>
              </Link>

              <Link href="#contact">
                <div className={classNames("")}>联系我们</div>
              </Link>
            </div>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};
