import { createHashRouter } from "react-router";
import App from "../app";
import Setting from "../screens/Setting";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/setting",
    element: <Setting />
  }
]);

export default router;
