import React, { useState } from 'react';
import './home.css';
import { Layout, Menu, Icon, Checkbox } from 'antd';
import LEDClock from '../Digital/ledClock/ledClock';

function Home() {
    const { SubMenu } = Menu;
    const { Header, Content, Sider } = Layout;
    const [secondVisible, setSecondVisibility] = useState(true);

    const onCheckSecond = (e) => setSecondVisibility(e.target.checked);

    return (
        <Layout>
            <Header className="header">
                <div className="logo">
                    
                </div>

                <Menu theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['1']}
                    style={{ lineHeight: '64px' }}>
                    <Menu.Item key="1"><Icon type="clock-circle" />Analog</Menu.Item>
                    <Menu.Item key="2"><Icon type="border-inner" />Digital</Menu.Item>
                </Menu>
            </Header>
            <Layout>
                <Sider width={230} style={{ background: '#fff' }}>
                    <Menu mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%', borderRight: 0 }}>
                        <SubMenu key="sub1" title={<span><Icon type="minus-circle" />Circular Box</span>}>
                            <Menu.Item key="1">Design 1</Menu.Item>
                            <Menu.Item key="2">Design 2</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" title={<span><Icon type="plus-circle" />Rectangular</span>}>
                            <Menu.Item key="3">Design 3</Menu.Item>
                            <Menu.Item key="4">Design 4</Menu.Item>

                        </SubMenu>

                    </Menu>
                </Sider>
                <Layout style={{ padding: '10px' }}>
                    <Content
                        style={{
                            background: '#fff',
                            padding: '30px',
                            margin: 0,
                            minHeight: 280,
                        }}
                    >

                        <Checkbox onChange={onCheckSecond} checked={secondVisible}>Show Second</Checkbox>
                        <LEDClock showSecond={secondVisible} />

                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
}

export default Home;