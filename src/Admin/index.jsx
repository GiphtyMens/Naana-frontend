import React from "react";
import { Outlet } from "react-router-dom";
import SideMenu from "./SideMenu";
import { Layout, Button } from "antd";
// import PostList from "./Layout/Posts/PostList";
// import SubNavigation from "../../components/SubNavigation";
// import mainDasboard from "./Layout/Default";
// import Chart from "./chart";
// import Sales from "./Layout/Sales";
// import AddBook from "./Layout/Books/AddBook/index";
// import BookList from "./Layout/Books/BookList/index";
const { Content, Footer, Sider } = Layout;

const Dashboard = () => {
  return (
    <div>
      {/* <SubNavigation /> */}
      <Layout>
        <Sider
          breakpoint="md"
          collapsedWidth="0"
          width="250"
          style={{
            borderRightColor: "white",
            height: "100vh",
            background: "white",
          }}
        >
          <SideMenu style={{ height: "100%" }} />
        </Sider>
        <Content style={{ backgroundColor: "#f9f9f9" }}>
          <Outlet />
        </Content>
      </Layout>
    </div>
  );
};

export default Dashboard;
