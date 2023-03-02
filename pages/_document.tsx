import { Html, Head, Main, NextScript } from "next/document";

// top level styles
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <link rel="icon" href="/favicon.png" />
      <link rel="apple-touch-icon" href="/favicon.png" />
      <link rel="mask-icon" href="/favicon.png" />
      {/* <body className="bg-fixed h-screen bg-gradient-to-b  from-day_gradient_top via-day_gradient_center to-day_gradient_bottom dark:from-night_gradient_blue dark:to-night_gradient_orange text-dark_blue dark:text-white"> */}
      <body className="bg-fixed h-screen bg-day_background_gradient dark:bg-night_background_gradient text-dark_blue dark:text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
