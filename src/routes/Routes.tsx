import { useRoutes } from "react-router-dom";

import MainRoutes from "./MainRoutes";

const Routes = () => {
  const routes = [...MainRoutes];

  return useRoutes(routes);
};

export default Routes;
