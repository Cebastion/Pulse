import { createBrowserRouter } from "react-router";
import App from "../app";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/setting"
  }
]);

export default router;
