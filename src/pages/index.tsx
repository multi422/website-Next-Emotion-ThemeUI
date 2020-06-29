import React from "react";
import Head from "next/head";

import Layout from "src/components/Layout/Layout";

const Index = () => {
  return (
    <div className="container">
      <Head>
        <title>Leonardo Maldonado</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <h1>Index</h1>
      </Layout>
    </div>
  );
};

export default Index;
