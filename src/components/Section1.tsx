import Image from "next/image";

export const Section1 = () => {
  return (
    <div className="">
      <div className="bg-[#FBE791] flex flex-col items-center">
        <div className="pt-[58px] text-center text-[60px] font-semibold text-[var(--color-primary)]">
          为你挚爱的人，点一盏真正的心灯
        </div>

        <div className="mt-5 text-[var(--color-primary)]/80 text-[24px]">
          全球华人专属真实祈福平台｜真实寺庙｜视频记录｜人文关怀
        </div>

        <Image
          src="/images/god.png"
          alt="god"
          width={1100}
          height={640}
          className="mt-[70px] w-[1100px] h-auto"
        />

        <div className="-mt-[400px] relative z-10">
          <div className="flex">
            <Image
              src="/images/god-bottom-line1.svg"
              alt="god"
              width={960}
              height={355}
              className="flex-1 h-auto"
            />

            <Image
              src="/images/god-bottom-line2.svg"
              alt="god"
              width={960}
              height={355}
              className="flex-1 h-auto"
            />
          </div>
        </div>

        {/* <div
          style={{
            backgroundImage: "url('/images/page-bg.svg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          className="w-[100%] h-[1000px] z-[20] relative"
        >
          <div></div>
        </div> */}
      </div>

      <div
        className="relative h-[355px] self-stretch w-full"
        style={{
          marginTop: "calc(-50vw*355/960)",
        }}
      >
        <Image
          src="/images/page-bg.svg"
          alt="background"
          width={1921}
          height={6320}
          className="w-full h-auto top-0 left-0 right-0"
        />
      </div>
    </div>
  );
};
