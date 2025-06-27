"use client";

import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { ContentWrapper } from "./ContentWrapper";
import classNames from "classnames";

export const Section2 = () => {
  return (
    <ContentWrapper className="mt-6 md:mt-[150px] z-10">
      <div
        id="events"
        className="flex flex-col md:flex-row items-stretch md:items-start justify-center gap-[50px] scroll-mt-10"
      >
        <div className="bg-[#FFF9E0F2] rounded-2xl px-4 py-5 w-full md:w-[510px]">
          <div className="flex items-center justify-between">
            <div className="text-black text-[16px] md:text-[22px] font-semibold">
              佛日点灯、献花、礼佛功德加倍
            </div>

            <Image
              src="/icons/icon-calendar.svg"
              alt="arrow-right"
              width={30}
              height={30}
              className="w-5 md:w-8"
            />
          </div>

          <Image
            src="/images/calendar-example.png"
            alt="section2-1"
            width={485}
            height={322}
            className="mt-5 w-full h-auto"
          />
        </div>

        <Events />
      </div>
    </ContentWrapper>
  );
};

const Events = () => {
  const [openedIndex, setOpenedIndex] = useState(-1);

  const handleClick = (index: number) => {
    if (openedIndex === index) {
      setOpenedIndex(-1);
    } else {
      setOpenedIndex(index);
    }
  };

  return (
    <div className="flex flex-col">
      <EventItem
        index={0}
        openedIndex={openedIndex}
        onClick={() => handleClick(0)}
        title="🐟 放生"
        content="放生不仅是解救生命，更是培养慈悲心，积累福报，净化业障的殊胜善行。佛陀教导我们，一切众生皆具佛性，皆可成佛。通过放生会我们践行佛陀的教诲，与众生结下善缘也为自身积累解脱的资粮放生物命都是精心挑选，确保其健康并适合放生环境人吉日殊胜，诚邀十方善信一起参与放生上供养三宝，下布施一切众生，消除一切业障，增加一切善缘功德，所愿皆能满足如意古祥人人人
祈愿:天下无灾，，大地清宁，国泰民安，风调雨顺，众生皆闻佛法，深恩开显智慧，福德圆融，福慧双增，福延子孙人人人
如需参与放生会会会还请提前联系登记….((提供姓名+愿望回向)"
      />

      <EventItem
        index={1}
        openedIndex={openedIndex}
        onClick={() => handleClick(1)}
        title="🧧 化太岁"
        content="放生不仅是解救生命，更是培养慈悲心，积累福报，净化业障的殊胜善行。佛陀教导我们，一切众生皆具佛性，皆可成佛。通过放生会我们践行佛陀的教诲，与众生结下善缘也为自身积累解脱的资粮放生物命都是精心挑选，确保其健康并适合放生环境人吉日殊胜，诚邀十方善信一起参与放生上供养三宝，下布施一切众生，消除一切业障，增加一切善缘功德，所愿皆能满足如意古祥人人人
祈愿:天下无灾，，大地清宁，国泰民安，风调雨顺，众生皆闻佛法，深恩开显智慧，福德圆融，福慧双增，福延子孙人人人
如需参与放生会会会还请提前联系登记….((提供姓名+愿望回向)"
      />

      <EventItem
        index={2}
        openedIndex={openedIndex}
        onClick={() => handleClick(2)}
        title="💰 补财库"
        content="放生不仅是解救生命，更是培养慈悲心，积累福报，净化业障的殊胜善行。佛陀教导我们，一切众生皆具佛性，皆可成佛。通过放生会我们践行佛陀的教诲，与众生结下善缘也为自身积累解脱的资粮放生物命都是精心挑选，确保其健康并适合放生环境人吉日殊胜，诚邀十方善信一起参与放生上供养三宝，下布施一切众生，消除一切业障，增加一切善缘功德，所愿皆能满足如意古祥人人人
祈愿:天下无灾，，大地清宁，国泰民安，风调雨顺，众生皆闻佛法，深恩开显智慧，福德圆融，福慧双增，福延子孙人人人
如需参与放生会会会还请提前联系登记….((提供姓名+愿望回向)"
      />

      <EventItem
        index={3}
        openedIndex={openedIndex}
        onClick={() => handleClick(3)}
        title="🤝 接贵人"
        content="放生不仅是解救生命，更是培养慈悲心，积累福报，净化业障的殊胜善行。佛陀教导我们，一切众生皆具佛性，皆可成佛。通过放生会我们践行佛陀的教诲，与众生结下善缘也为自身积累解脱的资粮放生物命都是精心挑选，确保其健康并适合放生环境人吉日殊胜，诚邀十方善信一起参与放生上供养三宝，下布施一切众生，消除一切业障，增加一切善缘功德，所愿皆能满足如意古祥人人人
祈愿:天下无灾，，大地清宁，国泰民安，风调雨顺，众生皆闻佛法，深恩开显智慧，福德圆融，福慧双增，福延子孙人人人
如需参与放生会会会还请提前联系登记….((提供姓名+愿望回向)"
      />

      <EventItem
        index={4}
        openedIndex={openedIndex}
        onClick={() => handleClick(4)}
        title="📚 学业金"
        content="放生不仅是解救生命，更是培养慈悲心，积累福报，净化业障的殊胜善行。佛陀教导我们，一切众生皆具佛性，皆可成佛。通过放生会我们践行佛陀的教诲，与众生结下善缘也为自身积累解脱的资粮放生物命都是精心挑选，确保其健康并适合放生环境人吉日殊胜，诚邀十方善信一起参与放生上供养三宝，下布施一切众生，消除一切业障，增加一切善缘功德，所愿皆能满足如意古祥人人人
祈愿:天下无灾，，大地清宁，国泰民安，风调雨顺，众生皆闻佛法，深恩开显智慧，福德圆融，福慧双增，福延子孙人人人
如需参与放生会会会还请提前联系登记….((提供姓名+愿望回向)"
      />

      <EventItem
        isLast
        index={5}
        openedIndex={openedIndex}
        onClick={() => handleClick(5)}
        title="💼 每月接贵人（每月一次）"
        content="放生不仅是解救生命，更是培养慈悲心，积累福报，净化业障的殊胜善行。佛陀教导我们，一切众生皆具佛性，皆可成佛。通过放生会我们践行佛陀的教诲，与众生结下善缘也为自身积累解脱的资粮放生物命都是精心挑选，确保其健康并适合放生环境人吉日殊胜，诚邀十方善信一起参与放生上供养三宝，下布施一切众生，消除一切业障，增加一切善缘功德，所愿皆能满足如意古祥人人人
祈愿:天下无灾，，大地清宁，国泰民安，风调雨顺，众生皆闻佛法，深恩开显智慧，福德圆融，福慧双增，福延子孙人人人
如需参与放生会会会还请提前联系登记….((提供姓名+愿望回向)"
      />
    </div>
  );
};

const EventItem = ({
  index,
  openedIndex,
  title,
  content,
  onClick,
  isLast,
}: {
  index: number;
  openedIndex: number;
  title: string;
  content: string;
  onClick: () => void;
  isLast?: boolean;
}) => {
  const isOpen = openedIndex === index;

  return (
    <div className="w-full md:w-[620px] text-white relative py-2">
      {!isLast && (
        <div className="absolute w-[1px] top-[30px] -bottom-[30px] left-[18px] md:left-[20px] bg-[#FFFFFF33]" />
      )}

      <div
        className={
          "z-10 relative flex items-center py-4 justify-between cursor-pointer hover:bg-white/10 px-3 rounded-md"
        }
        onClick={onClick}
      >
        <div className="flex items-center gap-4 md:gap-[30px]">
          <div
            className={classNames(
              "w-3 h-3 md:w-4 md:h-4 rounded-full",
              isOpen
                ? "border-[2px] md:border-[3px] border-[#FBE791] bg-[#1E5B5D]"
                : "bg-[#6DA985]"
            )}
          />

          <div className="text-[20px] md:text-[24px] font-semibold">
            {title}
          </div>
        </div>

        <ChevronLeft
          strokeWidth={2}
          className={classNames(
            "w-5 md:w-5",
            isOpen ? "rotate-90" : "-rotate-90"
          )}
        />
      </div>

      {isOpen && (
        <div
          className={twMerge(
            "mt-1 pl-[42px] md:pl-[57px] pr-3"
            // !isOpen ? "h-0 overflow-hidden" : ""
          )}
        >
          <div className="text-[14px] md:text-[16px] font-medium opacity-80 leading-normal">
            {content}
          </div>

          <div className="mt-4 px-6 py-2.5 bg-[#FFF9E0] rounded-full clickable-effect text-black/80 font-medium text-[14px] md:text-[16px] inline-flex">
            立即参加
          </div>
        </div>
      )}
    </div>
  );
};
