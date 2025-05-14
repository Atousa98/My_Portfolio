import React, { lazy } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { HelmetMeta } from "./HelmetMeta";
import { ThemeProvider } from "../components/theme/ThemeProvider";
import { CssBaseline } from "@material-ui/core";
import { logCredits } from "../utils/logCredits";

import { Home } from "../pages/Home";
const PageNotFound = lazy(() => import("../pages/PageNotFound"));

<video controls width="400">
  <source src="/LongDrive.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

export const App = () => {
    logCredits();

    return (
      <ThemeProvider>
        <CssBaseline />
        <Router>
          <HelmetMeta />
          <Switch>
              <Route path="/" exact component={Home} />
              {/* <Route path="/resume" component={Resume} /> */}
              <Route path="*" component={PageNotFound} />
          </Switch>
        </Router>
      </ThemeProvider>
    );
};
