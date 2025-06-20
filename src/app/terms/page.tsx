import { ContentWrapper } from "@/components/ContentWrapper";
import { bold600Font } from "@/utils/fontUtils";
import classNames from "classnames";

export default function Terms() {
  return (
    <ContentWrapper className="md:px-20">
      <div className="min-h-[100vh] mt-[var(--header-height-mobile)] md:mt-[var(--header-height)]">
        <div
          className={classNames(
            "mt-3 md:mt-[140px] text-[24px] md:text-[42px] font-medium leading-none text-left md:text-left",
            bold600Font.className
          )}
        >
          User Terms and Conditions
        </div>

        <div className="mt-10 text-[12px] md:text-[16px]">
          <p className=" text-[var(--text-default-2)]">
            The information provided on this platform is for reference purposes
            only and does not constitute investment advice, endorsement,
            analysis, or recommendation for any financial instrument, investment
            project, or issuer.
          </p>

          <ul className="mt-4 space-y-2 text-gray-500">
            <li>
              • Investing in cryptocurrencies and DeFi projects carries high
              risks, including the potential for total loss.
            </li>
            <li>
              • This platform does not consider individual investment goals,
              financial circumstances, or specific needs.{" "}
            </li>
            <li>
              • Please consult professional legal and financial advisors before
              making any investment decisions.
            </li>
          </ul>
        </div>
      </div>
    </ContentWrapper>
  );
}
