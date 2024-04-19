import React, { useState } from 'react';

import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
  SettingOutlined,
  DashboardOutlined,
  InfoCircleOutlined,
  


} from '@ant-design/icons';
import { Outlet, useNavigate } from 'react-router-dom';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import './Layout.css'
import MenuItems from './MenuItems';
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const logo = require("../../asset/image/catslogo.png");
const Whitelogo = require("../../asset/image/CatsWhiteLogo.png");
const themes = {
  light: {
    sidebar: {
      backgroundColor: "#EBEBEB",
      color: "#636363;",
    },
    menu: {
      menuContent: "#F0F0F0",
      icon: "#777777",
      fontSize: 40,
      hover: {
        backgroundColor: "#f9f9f9",
        color: "#44596e",
      },
      disabled: {
        color: "#9fb6cf",
      },
    },
  },
  dark: {
    sidebar: {
      backgroundColor: "#E4E4E4",
      color: "#545454",
    },
    menu: {
      menuContent: "#DDDDDD",
      icon: "#545454",
      hover: {
        backgroundColor: "#F0F0F0",
        color: "#545454",
      },
      disabled: {
        color: "#3e5e7e",
      },
    },
  },
};



const items = [
  getItem('Dashboard', 'tasks', <PieChartOutlined />),
  getItem('Info & Management', 'info', <InfoCircleOutlined />),
  getItem('Leave', '/', <TeamOutlined />, [getItem('All Employee', 'leave',<TeamOutlined/>), getItem('My Leave', '8',<UserOutlined/>)]),
  getItem('User', 'sub1', <UserOutlined />, [
    getItem('Tom', '3'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
  getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem('Report', '9', <FileOutlined />),
  getItem('Setting', '10', <SettingOutlined />),
];
const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const navigate = useNavigate();
  const onChange = (value) => {
   navigate(value.key)
   console.log(value.key)
  }

  return (
    <Layout
      style={{
        minHeight: '100vh',
        
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} onClick={onChange}/>
      </Sider>
      <Layout>
        <Header
        
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        > 
        
        <div className='header'>
        <div className='header-title'>Human Resource Management System</div>
        <img
          className="logo "
          alt=""
          src={theme === "light" ? logo : Whitelogo}
        />
        
        <MenuItems/>

       
        </div>

            </Header>
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
         <Outlet/>
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          © Copyright CATS. All Rights Reserved
        </Footer>
      </Layout>
    </Layout>
  );
};
export default MainLayout;