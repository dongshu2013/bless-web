import Image from "next/image";
import { ContentWrapper } from "./ContentWrapper";

export const Section3 = () => {
  return (
    <ContentWrapper className="z-10 mt-[50px] md:mt-[140px]">
      <div id="grow-road" className="pt-10 relative scroll-mt-10 text-white flex flex-col items-center">
        <div className="text-[30px] md:text-[50px] font-semibold">灵性成长路径</div>

        <div className="mt-6 md:mt-[50px] text-[14px] md:text-[24px] font-semibold md:w-[950px] px-5 md:px-0 leading-normal text-center">
          在人生的各个阶段，我们都会遇到瓶颈——事业停滞、人际不顺、情感迷惘、财运反复。
          许多时候，问题的根源并不在表面，而是在能量层面尚未清理或未被连接的“源头力量”。
          一个系统性、负责任的灵性服务流程，必须遵循能量层级清理与叠加的逻辑：
        </div>

        <Image
          src="/images/grow-road.svg"
          alt="section3-1"
          width={1554}
          height={748}
          className="mt-0 md:-mt-[140px] w-full h-auto"
        />

        <Image
          src="/images/lotus-flower.svg"
          alt="section3-1"
          width={321}
          height={256}
          className="absolute top-0 left-0 w-[180px] md:w-[300px] h-auto translate-x-[-40%] translate-y-[-10%]"
        />
      </div>
    </ContentWrapper>
  );
};
