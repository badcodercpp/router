import React from "react";
import { default as AntMenu } from "antd/lib/menu";

const getTitle = text => <label style={{ cursor: "pointer" }}>{text}</label>;

const renderContent = props => {
  const { title, children, onClick, ...rest } = props;
  if (children) {
    // render submenu and repeat!
    return (
      <AntMenu.SubMenu title={getTitle(title)} onTitleClick={onClick} {...rest}>
        {children.map(renderContent)}
      </AntMenu.SubMenu>
    );
  }
  // render menu item
  return (
    <AntMenu.Item onClick={onClick} {...rest}>
      {title}
    </AntMenu.Item>
  );
};

export default function Menu({ config }) {
  return (
    <AntMenu onClick={() => {}} mode="horizontal">
      {config && config.map(renderContent)}
    </AntMenu>
  );
}
