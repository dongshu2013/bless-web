"use client";

import { ChevronLeft } from "lucide-react";
import { ContentWrapper } from "./ContentWrapper";
import { twMerge } from "tailwind-merge";
import { useState } from "react";
import classNames from "classnames";

export const QA = () => {
  return (
    <ContentWrapper className="z-10 pt-[60px] md:pt-[180px] text-white">
      <div id="qas" className="flex flex-col items-center scroll-mt-10">
        <div className="text-[30px] md:text-[50px] font-semibold">
          常见问题Q&A
        </div>

        <div className="mt-8 md:mt-[80px] flex flex-col gap-4">
          <QAItem
            serial={1}
            question="一定要提供真实姓名和出生信息吗?"
            answer="是的，需要提供真实姓名、阳历出生年月日、现居地，这些信息是进行能量校对、感应及设定仪轨的重要依据，确保服务有效精准。"
          />

          <QAItem
            serial={2}
            question="服务是在我身边进行的吗?"
            answer="是的，需要提供真实姓名、阳历出生年月日、现居地，这些信息是进行能量校对、感应及设定仪轨的重要依据，确保服务有效精准。"
          />

          <QAItem
            serial={3}
            question="服务后多久能看到变化?"
            answer="是的，需要提供真实姓名、阳历出生年月日、现居地，这些信息是进行能量校对、感应及设定仪轨的重要依据，确保服务有效精准。"
          />

          <QAItem
            serial={4}
            question="效果可以保证吗?"
            answer="是的，需要提供真实姓名、阳历出生年月日、现居地，这些信息是进行能量校对、感应及设定仪轨的重要依据，确保服务有效精准。"
          />

          <QAItem
            serial={5}
            question="是否可以一次做多个项目?"
            answer="是的，需要提供真实姓名、阳历出生年月日、现居地，这些信息是进行能量校对、感应及设定仪轨的重要依据，确保服务有效精准。"
          />
        </div>
      </div>
    </ContentWrapper>
  );
};

const QAItem = ({
  serial,
  question,
  answer,
}: {
  serial: number;
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full xl:w-[1098px] text-white">
      <div
        className={
          "flex items-center py-4 justify-between cursor-pointer hover:bg-white/10 px-3 rounded-md"
        }
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="text-[16px] md:text-[24px] font-semibold">
          {serial}. {question}
        </div>

        <ChevronLeft
          strokeWidth={2}
          className={classNames("w-5 h-5", isOpen ? "rotate-90" : "-rotate-90")}
        />
      </div>

      <div
        className={twMerge("mt-1 px-3", !isOpen ? "h-0 overflow-hidden" : "")}
      >
        <div className="text-[14px] md:text-[16px] leading-normal">{answer}</div>
      </div>
    </div>
  );
};
