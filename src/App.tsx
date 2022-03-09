import React, {FC} from 'react';
import AppRouter from "./componetns/AppRouter";
import Navbar from "./componetns/Navbar";
import {Layout} from "antd";
import './App.css'

const App: FC = () => {
    return (
        <Layout>
            <Navbar />
            <Layout.Content>
                <AppRouter/>
            </Layout.Content>
        </Layout>
    );
};

export default App;
