import Image from "next/image";
import { ContentWrapper } from "./ContentWrapper";

export const Contact = () => {
  return (
    <ContentWrapper className="z-10 pt-[60px] md:pt-[180px] pb-[100px] md:pb-[240px]">
      <div
        id="contact"
        className="flex flex-col items-center scroll-mt-10 relative"
      >
        <div className="text-center text-[30px] md:text-[50px] font-semibold text-white">
          联系与预约
        </div>

        <Image
          src="/images/lotus-flower3.svg"
          alt="flower"
          width={300}
          height={134}
          className="absolute left-0 bottom-0 -translate-x-1/2 translate-y-1/2 w-[300px]"
        />

        <div
          className={`relative mt-9 md:mt-[60px]
            bg-[#FFF9E0F2] rounded-[30px]
             w-full xl:w-[1200px] 
             flex flex-col md:flex-row items-center md:items-start justify-between
             px-5 md:px-[70px] pt-8 md:pt-[70px] pb-5 md:pb-[34px]`}
        >
          <div className="flex flex-col items-center">
            <div className="bg-white rounded-[30px] min-w-[200px] md:min-w-[300px] w-[200px] md:w-[300px] h-[200px] md:h-[300px] p-5">
              <Image
                width={300}
                height={300}
                className="w-full h-full object-cover"
                src="/images/demo-qr.svg"
                alt="qr"
              />
            </div>

            <div className="mt-4 md:mt-8 text-black text-[14px] md:text-[16px] font-semibold">
              请使用微信扫描二维码
            </div>
          </div>

          <div className="mt-5 md:mt-0 w-full md:w-[612px] text-black">
            <div className="flex flex-col md:flex-row gap-2 md:gap-3">
              <input
                placeholder="姓名"
                className="flex-1 border border-[#00000033] bg-white rounded-lg h-[50px] min-h-[50px] px-2 md:px-4 text-[14px] md:text-[16px] focus:border-[#00494F] focus:outline-[#00494F] focus:outline-1"
              />

              <input
                placeholder="邮箱"
                className="flex-1 border border-[#00000033] bg-white rounded-lg h-[50px] min-h-[50px] px-2 md:px-4 text-[14px] md:text-[16px] focus:border-[#00494F] focus:outline-[#00494F] focus:outline-1"
              />
            </div>

            <div className="mt-2 md:mt-3 flex flex-col md:flex-row gap-2 md:gap-3">
              <input
                placeholder="电话"
                className="flex-1 border border-[#00000033] bg-white rounded-lg h-[50px] min-h-[50px] px-2 md:px-4 text-[14px] md:text-[16px] focus:border-[#00494F] focus:outline-[#00494F] focus:outline-1"
              />

              <input
                placeholder="时间"
                className="flex-1 border border-[#00000033] bg-white rounded-lg h-[50px] min-h-[50px] px-2 md:px-4 text-[14px] md:text-[16px] focus:border-[#00494F] focus:outline-[#00494F] focus:outline-1"
              />
            </div>

            <textarea
              placeholder="留言"
              className="w-full mt-2 md:mt-3 border border-[#00000033] bg-white rounded-lg p-4 text-[16px] focus:border-[#00494F] focus:outline-[#00494F] focus:outline-1"
              rows={5}
            />

            <div
              className={`w-full mt-6 h-[50px] flex items-center justify-center rounded-lg bg-[#00494F] clickable-effect
                `}
            >
              <div className="text-white font-medium text-[14px] md:text-[16px]">
                提交预约
              </div>
            </div>

            <div className="text-center font-medium text-[12px] md:text-[14px] text-black/60 mt-2 md:mt-6">
              所有服务均需提供:姓名、阳历出生年月日、目前所在地
              (用于精准匹配能量场)
            </div>
          </div>
        </div>
      </div>
    </ContentWrapper>
  );
};
