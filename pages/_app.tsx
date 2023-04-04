import "@/styles/globals.css";
import type { AppProps } from "next/app";

import Footer from "@/components/footer/Footer";
import Header from "@/components/navbar/Header";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
