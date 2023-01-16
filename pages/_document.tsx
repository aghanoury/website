import { Html, Head, Main, NextScript } from "next/document";

// top level styles
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-white text-dark_blue">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
