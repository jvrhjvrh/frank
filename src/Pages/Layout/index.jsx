import React from 'react';
import {Icon, Layout} from "antd";

const {Header, Content} = Layout;

const TopMenu = ({...children}) => (
    <Layout>
        <Header
            style={{
                backgroundColor:'lightblue',
                display:'flex',
                position:'fixed',
                zIndex:100,
                width:'100%'
            }}
        >
            <div>
               <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/anti-bullying-1-1182242.png" style={{height:'auto', width:'20%'}}/>
            </div>
            <div
                style={{flexGrow:1}}
            />
            <div
                style={{marginRight:'5%'}}
            >
                Jose Afonso
            </div>
            <div>
                <Icon type="logout" /> Logout
            </div>
        </Header>
        <Content
            style={{backgroundColor:'lightergrey'}}
        >
            {children.children}
        </Content>
    </Layout>
);

export default TopMenu;