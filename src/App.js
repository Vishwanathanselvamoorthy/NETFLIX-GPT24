import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AuthenticationPage from "./components/AuthenticationPage";
import Home from "./components/Home";

function App() {
  const appRoutes = createBrowserRouter([
    {
      path: "/",
      element: <AuthenticationPage />,
    },
    {
      path: "/home",
      element: <Home />,
    },
  ]);
  return <RouterProvider router={appRoutes} />;
}

export default App;
