// Application entrypoint.

// Render the top-level React component
import React from "react";
import ReactDom from "react-dom";
import App from "./App";

ReactDom.render(<App />, document.getElementById("react-root"));
