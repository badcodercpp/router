import React, { useState } from 'react';
import { Tabs, Button, TabPane } from 'antd';
import AutoComplete from '../../AutoComplete'
import HoverActionMenu from '../../HoverActionMenu';
import reactElementToJSXString from 'react-element-to-jsx-string';


function callback(key) {
  console.log(key);
}

function LogoRawComponent(params) {
    return (
        <p>
            hello kashish
        </p>
    )
}

function ApplyPropsToLogoComponent({Component, props}) {
    return function BadComponent() {
        return (
            <Component {...props} />
        )
    }
}

function AppLogoAndTitle(Component) {
    return reactElementToJSXString(Component);
}

function TabBarExtraContent({ loggedInUserinfo = {} }) {
    return (
        <div style={{
            width:"60rem"
        }} >
            <div style={{display:"inline-block", width: "20%", paddingTop:"5px"}} >
                <Button type="link" style={{color:"white", fontSize: "1.2rem"}} >About developers</Button>
            </div>
            <div style={{display:"inline-block", width: "50%", paddingTop:"5px"}} >
                <AutoComplete />
            </div>
            <div style={{display:"inline-block", width: "29%", float: "right", backgroundColor:"transparent"}} >
                <HoverActionMenu loggedInUserinfo={loggedInUserinfo} name={"badcoder"} />
            </div>
        </div>
    )
}

function AppNavigator(params) {
    return (
        <div style={{
            height:"50px",
            width:"100%",
            backgroundColor:"#33A532"
        }} >
            <Tabs defaultActiveKey="1" onChange={callback} tabBarGutter={100} tabBarStyle={{
                height:"50px",
                width:"100%",
            }} tabBarExtraContent={<TabBarExtraContent />} >
                <TabPane tab="Tab 1" key="1">
                </TabPane>
            </Tabs>
        </div>
    )
}

export default AppNavigator;