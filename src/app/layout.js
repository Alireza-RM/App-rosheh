import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import Providers from "@/providers/Providers";
import { yekan } from "@/utils/fonts";

import "./globals.css";

export const metadata = {
  title:
    "فروشگاه اینترنتی روشه – خرید آنلاین از برندهای معتبر عطری، آرایشی و پوستی",
  description:
    "فروشگاه اینترنتی روشه – خرید آنلاین از برندهای معتبر عطری، آرایشی و پوستی",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl" className="bg-white">
      <body className={yekan.className}>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
