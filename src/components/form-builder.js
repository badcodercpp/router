import React from "react";
import { Input } from "antd";

export default function FormBuilder({ config, containerProps }) {
  const content = config.map(({ fields, containerProps }) => (
    <div {...containerProps}>
      {Object.keys(fields).map(key => {
        const { inputProps, inputContainerProps, label, defaultValue } = fields[
          key
        ];
        return (
          <div {...inputContainerProps}>
            <label>{label}:</label>
            <Input value={defaultValue} {...inputProps} />
          </div>
        );
      })}
    </div>
  ));
  return <div {...containerProps}>{content}</div>;
}
