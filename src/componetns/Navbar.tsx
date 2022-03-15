import {Layout, Menu, Row} from 'antd';
import React from 'react';
import {useNavigate} from 'react-router-dom';
import {RouteNames} from "../router";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {AuthActionCreators} from "../store/reducers/auth/action-creators";
import {useDispatch} from "react-redux";
import {useActions} from "../hooks/useActions";

const Navbar = () => {
    const navigate = useNavigate()
    const {isAuth, user} = useTypedSelector(state => state.auth)
    const dispatch = useDispatch()
    const {logout} = useActions()

    return (
        <Layout.Header>
            <Row justify='end'>
                {isAuth
                    ?
                    <>
                        <div style={{color: 'white'}}>{user.username}</div>
                        <Menu theme="dark" mode="horizontal" selectable={false}>
                            <Menu.Item onClick={logout} key={1}>Выйти</Menu.Item>
                        </Menu>
                    </>
                    :
                    <>
                        <div style={{color: 'white'}}>FORZA</div>
                        <Menu theme="dark" mode="horizontal" selectable={false}>
                            <Menu.Item onClick={() => navigate(RouteNames.LOGIN)} key={1}>Логин</Menu.Item>
                        </Menu>
                    </>
                }
            </Row>
        </Layout.Header>
    );
};

export default Navbar;
