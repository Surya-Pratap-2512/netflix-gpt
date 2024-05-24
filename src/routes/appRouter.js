import { createBrowserRouter } from "react-router-dom";
import Body from "../components/Body/Body";
import Browse from "../components/Browse/Browse";
import Constants from "../utils/Constants";

const appRoutes = createBrowserRouter([
  {
    path: Constants.routes.body,
    element: <Body />,
  },
  {
    path: Constants.routes.browse,
    element: <Browse />,
  },
]);

export default appRoutes;
