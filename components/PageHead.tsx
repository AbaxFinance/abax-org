import Head from 'next/head';
export default function PageHead() {
  return (
    <Head>
      <title>Abax</title>
      <meta name="description" content="Liquidity Protocol" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=2" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=2" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=2" />
      <link rel="manifest" href="/site.webmanifest?v=2" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg?v=2" color="#000000" />
      <link rel="shortcut icon" href="/favicon.ico?v=2" />
      <meta name="apple-mobile-web-app-title" content="Abax Org" />
      <meta name="application-name" content="Abax Org" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta property="og:title" content={'Abax'} />
      <meta property="og:description" content={'Liquidity Protocol'} />
      <meta property="og:type" content={'website'} />
      <meta property="og:url" content={'https://abax.finance'} />
      <meta property="og:image" content={`https://abax.finance/og_twitter_card.jpg`} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@Abax"></meta>
      <meta name="twitter:site" content="@Abax" />
      <meta property="twitter:image" content={`https://abax.finance/og_twitter_card.jpg`} />
    </Head>
  );
}
