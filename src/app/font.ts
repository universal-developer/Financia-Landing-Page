import { Manrope } from 'next/font/google';

export const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"], // only the weights you actually use
  display: "swap",
  variable: "--font-manrope", // optional but recommended
});
