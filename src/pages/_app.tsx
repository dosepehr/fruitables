import type { AppProps } from "next/app";
// global styles
import "@/styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// components
import Menu from "@/components/modules/Menu/Menu";
import Navbar from "@/components/modules/Navbar/Navbar";
import Footer from "@/components/modules/Footer/Footer";
// store
import { StoreProvider } from "@/store/StoreProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <StoreProvider>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <Navbar />
          <Menu />
          <Component {...pageProps} />
          <Footer />
        </QueryClientProvider>
      </StoreProvider>
    </>
  );
}
