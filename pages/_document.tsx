import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400&display=swap" />
      </Head>
      <body className="body-font font-sora">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
