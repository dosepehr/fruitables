import type { AppProps } from "next/app";
// global styles
import "@/styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Menu from "@/components/modules/Menu/Menu";
import Navbar from "@/components/modules/Navbar/Navbar";
import Footer from "@/components/modules/Footer/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Menu />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
