import React from "react";
import "./App.css";
import { Layout, Icon, Input } from "antd";
import "antd/dist/antd.css";
import Menu from "./components/menu";
import Card from "./components/card-list";
import FormBuilder from "./components/form-builder";

const { Footer, Content } = Layout;

const menuConfig = [
  {
    title: "Our Services",
    children: [
      {
        title: "Scheduled Pickup",
        onClick: () => {
          alert("yo");
        },
        children: [
          {
            title: "Business Waste Pickup",
            onClick: () => {
              alert("jjj");
            }
          },
          { title: "Residential Curbside Pickup", onClick: () => {} }
        ]
      },
      { title: "Large Trash Pickup", onClick: () => {} },
      { title: "Temporary Dumpster", onClick: () => {} },
      {
        title: "On Demand Pickup",
        children: [
          {
            title: "On Demand Pickup",
            children: [
              { title: "Large Trash Pickup", onClick: () => {} },
              { title: "Temporary Dumpster", onClick: () => {} }
            ]
          },
          { title: "Large Trash Pickup", onClick: () => {} },
          { title: "Temporary Dumpster", onClick: () => {} }
        ]
      }
    ]
  },
  {
    title: "For Business"
  }
];

// Form
const firstRow = {
  containerProps: {
    style: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between"
    }
  },
  fields: {
    title: {
      label: "Title",
      defaultValue: "",
      type: "text",
      inputProps: {
        placeholder: "Warning"
      },
      onChange: () => {}
    },
    name: {
      label: "Name",
      defaultValue: "abcd",
      type: "text",
      inputProps: {},
      onChange: () => {}
    }
  }
};

const secondRow = {
  containerProps: {},
  fields: {
    username: {
      label: "Username",
      defaultValue: "",
      type: "text",
      inputProps: {
        prefix: <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
      },
      onChange: () => {}
    }
  }
};

const rows = [
  [
    {
      type: "",
      synthaticEventDispatchData: {},
      handlers: [],
      style: {},
      column: (column, props) => columnCreator.bind({ column, props }),
      ui: {
        appendBefore: {},
        appendAfter: {},
        isApiSyncNeeded: {},
        validations: []
      }
    }
  ]
];

const columnCreator = function column() {
  const { column, props } = this;
  return <React.Fragment>{column.apply(undefined, props)}</React.Fragment>;
};

const builder = (rows = [[]], formState = [[]]) => {
  return (
    <React.Fragment>
      {rows.map(column => {
        if (column && column[Symbol.iterator] === "function") {
          column.map(ui => {
            if (ui) {
              return ui.apply(undefined, handlers);
            }
            return null;
          });
        }
        return null;
      })}
    </React.Fragment>
  );
};

const fieldsConfig = [firstRow, secondRow];
////

function App() {
  return (
    <div className="App">
      <Layout>
        <div
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "row",
            boxShadow: "0 2px 8px #f0f1f2",
            background: "#fff"
          }}
        >
          <div>Kachrawala</div>
          <Menu config={menuConfig} />
        </div>
        <Content style={{ display: "flex", flex: 1, justifyContent: "center" }}>
          <FormBuilder
            config={fieldsConfig}
            containerProps={{ style: { width: "30%" } }}
          />
        </Content>
        <Footer style={{ height: 200 }}>Footer</Footer>
      </Layout>
    </div>
  );
}

export default App;
