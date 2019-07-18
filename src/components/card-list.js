import React from "react";
import { default as AntCard } from "antd/lib/card";
import { Skeleton, Icon, Avatar } from "antd";
import Meta from "antd/lib/card/Meta";

export default function Card({ config }) {
  return (
    <AntCard
      style={{ width: "100%" }}
      actions={[
        <Icon type="setting" />,
        <Icon type="edit" />,
        <Icon type="ellipsis" />
      ]}
    >
      <Skeleton loading={true} active>
        <Meta title="Card title" description="This is the description" />
      </Skeleton>
    </AntCard>
  );
}
