import {Layout, Menu, Row} from 'antd';
import React from 'react';

const Navbar = () => {
    return (
        <Layout.Header>
            <Row justify={'end'}/>
            <Menu theme="dark" mode="horizontal" selectable={false}>
                <Menu.Item key="1">Логин</Menu.Item>
            </Menu>
        </Layout.Header>
    );
};

export default Navbar;
