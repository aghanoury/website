import { Html, Head, Main, NextScript } from "next/document";

// top level styles
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <link rel="icon" href="/favicon.png" />
      <link rel="apple-touch-icon" href="/favicon.png" />
      <link rel="mask-icon" href="/favicon.png" />
      <body className="bg-white text-dark_blue dark:bg-dark_blue dark:text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
