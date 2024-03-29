import { useRoutes, BrowserRouter } from "react-router-dom";
import { ShoppingCartProvider } from "../../Context";
import Home from "../Home";
import MyOccount from "../MyAccount";
import MyOrder from "../MyOrder";
import MyOrders from "../MyOrders";
import NotFound from "../NotFound";
import SignIn from "../SignIn";
import Navbar from "../../Components/Navbar";
import CheckoutSideMenu from "../../Components/CheckoutSideMenu";

import "./App.css";

const AppRoutes = () => {
  let routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/MyOccount",
      element: <MyOccount />,
    },
    {
      path: "/MyOrder",
      element: <MyOrder />,
    },
    {
      path: "/MyOrders",
      element: <MyOrders />,
    },
    {
      path: "/MyOrders/last",
      element: <MyOrder />,
    },
    {
      path: "/MyOrders/:id",
      element: <MyOrder />,
    },
    {
      path: "/*",
      element: <NotFound />,
    },
    {
      path: "/SignI",
      element: <SignIn />,
    },
  ]);
  return routes;
};

const App = () => {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
        <CheckoutSideMenu />
      </BrowserRouter>
    </ShoppingCartProvider>
  );
};

export default App;
