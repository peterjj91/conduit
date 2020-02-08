import React from "react";
import { Switch, Route } from "react-router-dom";

import GlobalFeed from "pages/GlobalFeed";
import Article from "pages/Article";
import Authentication from "pages/Authentication";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={GlobalFeed} exact />
      <Route path="/articles/:slug" component={Article} />
      <Route path="/login" component={Authentication} />
      <Route path="/register" component={Authentication} />
    </Switch>
  );
};
export default Routes;
