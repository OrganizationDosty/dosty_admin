import React, { FC, useEffect } from "react";
import { Layout } from "antd";
import { useRouter } from "next/router";

import HeaderComponent from "modules/dashboard/components/header/Header";
import Sidebar from "modules/dashboard/components/sidebar/Sidebar";

import useRenderChildren from "@/modules/dashboard/hooks/useRenderChildren.hook";

const { Content } = Layout;

const Dashboard: FC = (): JSX.Element => {
  const { push, query: {  platform, section, subSection } } = useRouter();
  const {RenderChildren} = useRenderChildren()

  useEffect(() => {
    if (localStorage.getItem("opala") !== "true") {
      (async () => await push("/"))()
    }
  }, []);

  return (
    <Layout>

      {typeof platform === 'string' && <HeaderComponent platform={platform}/>}

      <Layout>

        {typeof section === 'string' && typeof subSection === 'string' && <Sidebar section={section} subSection={subSection}/>}

        <Layout style={{ padding: "0 24px 24px" }}>
          <Content
            style={{
              padding: 24,
              margin: 0,
              marginTop: 32,
              minHeight: 'calc(100vh - 120px)',
              background: 'white',
            }}
          >
            {typeof subSection === 'string' && RenderChildren(subSection)}

          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
