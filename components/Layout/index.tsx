import Head from "next/head";
import { FC, ReactNode } from "react";
import { Footer, Header } from "../";

interface Props {
  children?: ReactNode;
  headOptions?: {
    title: string;
    description: string;
  };
}

const Layout: FC<Props> = ({ children, headOptions }) => {
  return (
    <>
      <Head>
        <title>{headOptions?.title}</title>
        <meta name="description" content={headOptions?.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />

        {children}

        <Footer />
      </main>
    </>
  );
};

export default Layout;
