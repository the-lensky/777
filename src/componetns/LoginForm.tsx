import React, {FC, useState} from 'react';
import {Button, Form, Input} from "antd";
import {rules} from "../utils/rules";
import {useDispatch} from "react-redux";
import {AuthActionCreators} from "../store/reducers/auth/action-creators";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";

const LoginForm: FC = () => {
    const dispatch = useDispatch()
    const {error, iSLoading} = useTypedSelector(state => state.auth)
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const {login} = useActions()
    const submit = () => {
        login(username, password)
    }

    return (
        <Form
            onFinish={submit}
        >
            {
                error && <div style={{color: 'red'}}>
                    {error}
                </div>
            }

            <Form.Item
                label="Логин"
                name="username"
                rules={[rules.required('Введите имя')]}
            >
                <Input
                    value={username}
                    onChange={e => setUserName(e.target.value)}
                />
            </Form.Item>
            <Form.Item
                label="Пароль"
                name="password"
                rules={[rules.required('Введите пароль')]}
            >
                <Input
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    type={'password'}
                />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" loading={iSLoading}>
                    Войти
                </Button>
            </Form.Item>
        </Form>
    );
}

export default LoginForm;