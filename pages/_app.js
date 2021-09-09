import Head from "next/head";
import "@/styles/tailwind.css";
import "@/styles/custom.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Nextify 🌠 - Awesome Boilerplate</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
