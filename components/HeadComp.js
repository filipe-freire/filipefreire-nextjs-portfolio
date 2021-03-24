import Head from "next/head";

const HeadComp = ({ title, children }) => {
  return (
    <Head>
      <title>{`${title} | Filipe Freire`}</title>
      {children}
    </Head>
  );
};

export default HeadComp;
