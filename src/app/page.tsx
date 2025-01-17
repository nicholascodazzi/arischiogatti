import Carousel from "../components/Carousel";
import Sections from "../components/Sections";
import Adoptions from "../components/Adoptions";
import Head from "next/head";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <Head>
        <meta name="author" content="Codazzi Nicholas" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Script src="http://localhost:8097"></Script>
      <Carousel />
      <Sections />
      <Adoptions />
    </>
  );
}
