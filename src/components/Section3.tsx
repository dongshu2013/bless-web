import { WEBSITE_LINKS } from "@/utils/constants";
import { bold500Font } from "@/utils/fontUtils";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { ContentWrapper } from "./ContentWrapper";

export const Section3 = () => {
  return (
    <ContentWrapper className="py-5 xl:py-20 xl:px-[120px]">
      <div
        id="features"
        className="flex flex-col-reverse md:flex-row items-center justify-between gap-0 md:gap-[100px] scroll-mt-30"
      >
        <div>
          <div
            className={classNames(
              "mt-4 text-[28px] md:text-[42px] leading-none text-center md:text-left",
              bold500Font.className
            )}
          >
            KOL Traffic Aggregation, Ignite with Precision!
          </div>

          <div
            className={classNames(
              "mt-6 max-w-[400px] text-[16px] leading-normal text-[var(--text-default-2)] text-center md:text-left",
              bold500Font.className
            )}
          >
            Top-tier KOLs join forces, delivering your brand with precision to
            reach your target audience!
          </div>

          <Link
            href={WEBSITE_LINKS.app}
            target="_blank"
            className="hidden md:block"
          >
            <div className="mt-8 relative cursor-pointer px-5 h-[54px] bg-[#6E69FF] border border-[#B1D0F8] inline-flex items-center justify-center rounded-full drop-shadow-[0px_0px_34px_rgba(80,133,255,0.2)] overflow-hidden">
              {/* Blurred circle background */}
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
                  "text-[16px] text-white relative z-10",
                  bold500Font.className
                )}
              >
                Get Started Free
              </div>
            </div>
          </Link>
        </div>

        <Image
          src="/images/banner1.png"
          alt="banner1"
          width={500}
          height={390}
          className="w-full md:min-w-[500px] md:w-[500px] h-auto"
        />
      </div>

      <div className="mt-4 md:mt-[150px] flex flex-col md:flex-row items-center justify-between gap-0 md:gap-[120px]">
        <Image
          src="/images/banner2.png"
          alt="banner1"
          width={526}
          height={408}
          className="w-full md:min-w-[526px] md:w-[526px] h-auto"
        />

        <div>
          <div
            className={classNames(
              "mt-3 text-[28px] md:text-[42px] leading-none text-center md:text-left",
              bold500Font.className
            )}
          >
            AI-Powered Engagement & User Activation
          </div>

          <div
            className={classNames(
              "mt-6 max-w-[400px] text-[16px] leading-normal text-[var(--text-default-2)] text-center md:text-left",
            )}
          >
            The platform uses integrated AI to generate compelling content and
            automate social tasks (e.g., retweeting/commenting), lowering entry
            barriers. Its streamlined onboarding transforms newcomers into
            active creators or community participants.
          </div>

          <Link
            href={WEBSITE_LINKS.app}
            target="_blank"
            className="hidden md:block"
          >
            <div className="mt-8 relative cursor-pointer px-5 h-[54px] bg-[#6E69FF] border border-[#B1D0F8] inline-flex items-center justify-center rounded-full drop-shadow-[0px_0px_34px_rgba(80,133,255,0.2)] overflow-hidden">
              {/* Blurred circle background */}
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
                  "text-[16px] text-white relative z-10",
                  bold500Font.className
                )}
              >
                Get Started Free
              </div>
            </div>
          </Link>
        </div>
      </div>

      <div className="mt-[10px] md:mt-[150px] flex flex-col-reverse md:flex-row items-center justify-between gap-0 md:gap-[100px]">
        <div>
          <div
            className={classNames(
              "mt-4 text-[28px] md:text-[42px] leading-none text-center md:text-left",
              bold500Font.className
            )}
          >
            Reputation-Driven KOL Ecosystem
          </div>

          <div
            className={classNames(
              "mt-6 max-w-[400px] text-[16px] leading-normal text-[var(--text-default-2)] text-center md:text-left",
            )}
          >
            KOLs earn rewards based on content quality and engagement metrics,
            incentivizing high-impact content that resonates with audiences and
            elevates platform value.
          </div>

          <Link
            href={WEBSITE_LINKS.app}
            target="_blank"
            className="hidden md:block"
          >
            <div className="mt-8 relative cursor-pointer px-5 h-[54px] bg-[#6E69FF] border border-[#B1D0F8] inline-flex items-center justify-center rounded-full drop-shadow-[0px_0px_34px_rgba(80,133,255,0.2)] overflow-hidden">
              {/* Blurred circle background */}
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
                  "text-[16px] text-white relative z-10",
                  bold500Font.className
                )}
              >
                Get Started Free
              </div>
            </div>
          </Link>
        </div>

        <Image
          src="/images/banner3.png"
          alt="banner1"
          width={500}
          height={390}
          className="w-full md:min-w-[500px] md:w-[500px] h-auto"
        />
      </div>
    </ContentWrapper>
  );
};
