import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import Routes from "routes";
import Topbar from "components/Topbar";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Topbar />
        <Routes />
      </Router>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
