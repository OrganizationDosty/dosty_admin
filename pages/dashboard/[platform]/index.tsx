import { NextPage } from "next";
import Head from "next/head";

import Dashboard from "modules/dashboard";

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>

      <Dashboard />
    </>
  );
};

export default Index;
