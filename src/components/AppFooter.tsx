import Image from "next/image";

export const AppFooter = () => {
  return (
    <div className="z-10 relative bg-[#F3E198] flex flex-col items-center pt-6 md:pt-[50px] pb-6 md:pb-[40px]">
      <div
        className="z-0 absolute inset-0 opacity-100"
        style={{
          backgroundImage: "url('/images/footer-mask.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <Image
        src="/logo.png"
        width={106}
        height={106}
        alt="logo"
        className="w-[70px] md:w-[106px]"
      />

      <div className="mt-5 md:mt-[40px] self-stretch h-[1px] bg-[#0021271A]" />

      <div className="mt-5 md:mt-[40px] text-[14px] md:text-[16px] text-[#002127]">@2022NFT. All rights reserved </div>
    </div>
  );
};
