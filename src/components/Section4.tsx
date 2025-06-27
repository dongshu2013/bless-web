"use client";

import Image from "next/image";
import { ContentWrapper } from "./ContentWrapper";
import { useState } from "react";
import classNames from "classnames";
import { twMerge } from "tailwind-merge";

export const Section4 = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ContentWrapper className="z-10 mt-[50px]">
      <div
        id="service"
        className="relative flex flex-col items-center scroll-mt-10"
      >
        <Image
          src={
            isOpen ? "/images/revelation-opened.svg" : "/images/revelation.svg"
          }
          alt="section4-1"
          width={892}
          height={154}
          className="w-[892px] h-auto cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        />

        {isOpen && <Detail />}
      </div>
    </ContentWrapper>
  );
};

const Detail = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="mt-[50px] md:mt-[90px] flex flex-col items-center">
      <div className="text-[30px] md:text-[50px] font-semibold text-white">
        有福之人
      </div>

      <div className="mt-9 md:mt-[65px] flex items-center justify-center gap-6 md:gap-[70px]">
        <div
          className={classNames(
            "px-9 md:px-[80px] py-[16px] flex items-center justify-center border  rounded-full cursor-pointer transition-all duration-300",
            activeIndex === 0
              ? "border-[#FBEAA1] text-[#FBEAA1]"
              : "border-white/30 text-white hover:border-[#FBEAA1]/60 hover:text-[#FBEAA1]/60"
          )}
          onClick={() => setActiveIndex(0)}
        >
          <div className="text-[16px] md:text-[26px]">9种特质</div>
        </div>

        <div className="w-[1px] h-[20px] md:h-[30px] bg-white/60 rotate-[20deg]" />

        <div
          className={classNames(
            "px-9 md:px-[80px] py-[16px] flex items-center justify-center border rounded-full cursor-pointer transition-all duration-300",
            activeIndex === 1
              ? "border-[#FBEAA1] text-[#FBEAA1]"
              : "border-white/30 text-white hover:border-[#FBEAA1]/60 hover:text-[#FBEAA1]/60"
          )}
          onClick={() => setActiveIndex(1)}
        >
          <div className="text-[16px] md:text-[26px]">9种戒行</div>
        </div>
      </div>

      <div
        className={classNames(
          "mt-8 md:mt-[60px] grid justify-center gap-3 md:gap-8 text-black grid-cols-[var(--revelant-cols-1)] md:grid-cols-[var(--revelant-cols-3)]",
          activeIndex === 0 ? "" : "hidden"
        )}
        style={
          {
            // gridTemplateColumns: "repeat(3, 380px)",
          }
        }
      >
        <RevelationCard
          title="不抱怨"
          description="愿意面对现实，不将能量浪费在指责和埋怨上。"
        />
        <RevelationCard
          title="不畏惧"
          description="内心有信念，遇事不逃避，敢于迎接挑战。"
        />
        <RevelationCard
          title="不作恶"
          description="守住善念，不因一时情绪或利益而伤害他人。"
        />
        <RevelationCard
          title="不多虑"
          description="心安即福，懂得顺其自然，不为未知过度担忧。"
        />
        <RevelationCard
          title="能忍耐"
          description="明白时机未到，愿意沉淀自己，不急不躁。"
        />
        <RevelationCard
          title="能克制"
          description="控制欲望与冲动，懂得节制才有真正自由。"
        />
        <RevelationCard
          title="能冷静"
          description="在混乱中不乱，在情绪中不失控，保持清明判断。"
        />
        <RevelationCard
          title="能放下"
          description="放下过去的执念与伤痛，才能真正迎来新生。"
        />
        <RevelationCard
          title="能觉醒"
          description="持续自省成长，看见更高的生命意义与方向。"
        />
      </div>

      <div
        className={classNames(
          "mt-8 md:mt-[60px] grid justify-center gap-3 md:gap-8 text-black grid-cols-[var(--revelant-cols-1)] md:grid-cols-[var(--revelant-cols-3)]",
          activeIndex === 1 ? "" : "hidden"
        )}
        style={
          {
            // gridTemplateColumns: "repeat(3, 380px)",
          }
        }
      >
        <RevelationCard
          title="不杀生：心存慈悲，尊重生命"
          description="珍惜一切有情众生的生命，远离暴力与伤害，不以任何形式伤害他人或自己，包括语言暴力和冷漠伤害。"
          className="items-start pt-6 md:pt-8"
        />

        <RevelationCard
          title="不偷盗：守住本分，不取不义之物"
          description="不占便宜、不贪取属于他人的资源或成果，懂得节制与感恩，财富才能自然聚来。"
          className="items-start pt-6 md:pt-8"
        />

        <RevelationCard
          title="不妄语：诚实正直，言行一致"
          description="不说谎、不欺骗，不随意承诺，信守言语，是建立信任与福气的基础。"
          className="items-start pt-6 md:pt-8"
        />

        <RevelationCard
          title="不邪淫：情感清明，关系纯正"
          description="尊重感情与身体界限，不滥情，不介入他人关系，情感清净，则心安气顺。"
          className="items-start pt-6 md:pt-8"
        />

        <RevelationCard
          title="不贪婪：知足感恩，不攀比"
          description="减少对名利物欲的执着，活在当下，才能真正获得内心的富足和平静。"
          className="items-start pt-6 md:pt-8"
        />

        <RevelationCard
          title="不瞋恨：情绪稳定，不起恶意"
          description="面对不满或冲突时，不以怒气回应，转化情绪为理解，是高阶的福报磁场。"
          className="items-start pt-6 md:pt-8"
        />

        <RevelationCard
          title="不愚痴：保持觉知，不盲目"
          description="愿意学习与自省，不随波逐流，不陷入无明，是智慧人生的开始。"
          className="items-start pt-6 md:pt-8"
        />

        <RevelationCard
          title="不妄作：行为清净，不造恶业"
          description="日常中保持正念，避免作出伤人利己的行为，让每个当下都种下善因。"
          className="items-start pt-6 md:pt-8"
        />

        <RevelationCard
          title="不自私：利益众生，广结善缘"
          description="懂得舍得、助人、共赢，愿意为他人着想，是福气不断的真正根源。"
          className="items-start pt-6 md:pt-8"
        />
      </div>
    </div>
  );
};

const RevelationCard = (props: {
  title: string;
  description: string;
  className?: string;
}) => {
  return (
    <div
      className={twMerge(
        "relative w-full h-[160px] flex px-6 md:px-10 items-center bg-[#FFF9E0F2] rounded-2xl overflow-hidden",
        props.className
      )}
    >
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "url('/images/revelation-card-mask.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="relative z-10">
        <div className=" text-[20px] font-semibold">{props.title}</div>

        <div className="mt-2 text-[14px] leading-normal">
          {props.description}
        </div>
      </div>
    </div>
  );
};
