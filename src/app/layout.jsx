import { Plus_Jakarta_Sans } from "next/font/google";
import "../common/style/globals.css";
import { LenisProvider } from "@/common/component/element/LenisProvider";
import Navbar from "@/common/component/navbar/Navbar";
import Footer from "@/common/component/element/Footer";

const plusj = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Hawk Protocol",
  description: "Hawk Protocol ~ Truly Decentralized, scalable, trusted protocol.",
  icons: '/Aset/logo.png'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body className={plusj.className}>
        <LenisProvider>
          <div className="w-full flex justify-center items-center">
            <Navbar />
          </div>
          {children}

          <div className="w-full flex justify-center items-center">
            <Footer />
          </div>
        </LenisProvider>
      </body>
    </html>
  );
}
