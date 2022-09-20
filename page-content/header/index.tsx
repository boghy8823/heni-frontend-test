import Head from "next/head";

export interface PageProps {
  title: string;
  image?: string;
  description: string;
  url: string;
}

interface HeaderProps {
  pageProps: PageProps;
}

export const Header = ({ pageProps }: HeaderProps) => {
  const { title, url, description, image } = pageProps;
  return (
    <Head>
      <title>{title}</title>

      <meta property="og:title" content={title} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={description} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="localhost" />
      <meta property="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      {!!image && (
        <>
          <meta name="twitter:image" content={image} />
          <meta property="og:image" content={image} />
        </>
      )}
    </Head>
  );
};
