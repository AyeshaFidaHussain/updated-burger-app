import React from "react";
import {Route} from 'react-router-dom';

import { Homepage, Loginpage } from "./components/components";

const routes = [
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/Login",
      element: <Loginpage />,
    },
  ];

  const routeElement = routes.map(({ path, element }, key) => (
    <Route path={path} element={element} key={key}></Route>
  ));

export default routeElement;
