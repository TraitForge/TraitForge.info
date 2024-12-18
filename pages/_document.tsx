import { Html, Head, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html lang="en">
      <Head>
        {/* Favicon and Manifest */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />

        {/* SEO Meta Tags */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="TraitForge: Mint, Nuke, and Forge unique NFTs with distinct traits and endless possibilities." />
        <meta name="keywords" content="NFT, TraitForge, blockchain, mint, forge, gaming" />
        <meta name="author" content="TraitForge Team" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="TraitForge | Mint, Nuke, and Forge Unique Entities" />
        <meta property="og:description" content="Dive into TraitForge, where creativity meets strategy. Mint up to 100,000 distinct NFTs with unique traits. Play, forge, and build your collection!" />
        <meta property="og:image" content="https://traitforge.info/assets/preview-image.jpg" />
        <meta property="og:url" content="https://traitforge.info" />
        <meta property="og:type" content="website" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <div id="modal-root"></div>
      </body>
    </Html>
  );
};

export default Document;
