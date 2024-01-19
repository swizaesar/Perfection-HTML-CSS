import { ConfigProvider } from "antd";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        components: {
          Button: {
            colorPrimary: "#2A3958",
            algorithm: true, // Enable algorithm
            primaryShadow: "none",
          },
        },
      }}
    >
      <App />
    </ConfigProvider>
  </React.StrictMode>
);
