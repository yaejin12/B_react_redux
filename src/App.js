import React from "react";
import Layout from "./redux-cart/components/Layout/Layout";
import Cart from "./redux-cart/components/Cart/Cart";
import Products from "./redux-cart/components/Shop/Products";
import { isVisible } from "@testing-library/user-event/dist/utils";
import { useSelector } from "react-redux";

const App = () => {
  //콜백으로 불러와야한다.
  const isVisible = useSelector((state) => console.log(state));
  return (
    <Layout>
      {isVisible && <Cart />}
      <Products />
    </Layout>
  );
};

export default App;
