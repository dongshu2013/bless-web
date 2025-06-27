import { Poppins, Inter, Mona_Sans } from "next/font/google";
import localFont from "next/font/local";

// export const regularFont = Mona_Sans({
//   weight: "400",
//   subsets: ["latin"],
// });

// export const bold500Font = Mona_Sans({
//   weight: "500",
//   subsets: ["latin"],
// });

// export const bold600Font = Mona_Sans({
//   weight: "600",
//   subsets: ["latin"],
// });

export const regularFont = localFont({
  src: "../../public/font/pingfang-sc-regular.ttf",
  weight: "400",
  style: "normal",
  display: "swap",
});
