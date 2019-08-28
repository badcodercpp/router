import React from 'react';
import { Menu, Icon  } from 'antd';

const { SubMenu } = Menu;

function HoverActionMenu(){
    return (
        <Menu onClick={()=>{}} selectedKeys={["test"]} mode="horizontal" style={{
            backgroundColor:"#33A532",
            color: "white"
        }} >
        <SubMenu
          title={
            <span className="submenu-title-wrapper" >
              <Icon type="setting" />
              Navigation Three - Submenu
            </span>
          }
        >
          <Menu.ItemGroup title="Item 1">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Item 2">
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        </Menu>
    )
}

export default HoverActionMenu;