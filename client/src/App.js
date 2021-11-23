/* eslint-disable */
import React, { useState, useEffect } from "react";
import { CssBaseline } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Navbar, Products, Cart, Checkout } from "./components";

import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state/index";
import "./App.css";
import "./index.css";

const App = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [products, setProducts] = useState([]);
  const [catalogImages, setCatalogImages] = useState([]);
  const [loyaltyBalance, setLoyaltyBalance] = useState([]);
  const [loyalty, setLoyalty] = useState([]);
  const [apiData, setApiData] = useState({ test: "hey" });
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const { addItemToCart, removeItemFromCart } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const fetchLoyalty = async () => {
    const loyalty = await fetch("/api/loyalty")
      .then((res) => res.json())
      .then((data) => data);

    const loyaltyBalance = await loyalty.balance;

    setLoyalty(loyalty);

    setLoyaltyBalance(loyaltyBalance);
    console.log(loyalty);
  };

  const fetchProducts = async () => {
    const catalog = await fetch("/api/catalog")
      .then((res) => res.json())
      .then((data) => data);

    const products = await catalog.items.message;
    const images = await catalog.images.message;

    setProducts(products);
    setCatalogImages(images);
    // console.log(JSON.stringify(products));
  };

  // const fetchCart = async () => {
  // };

  const handleAddToCart = async (product, quantity) => {
    addItemToCart(product, 1);
    // addItemToCart(productId, 1);
    console.log('cart state: ' + JSON.stringify(state));
    // setCart(state);
  };

  const handleUpdateCartQty = async (lineItemId, quantity) => {
    addItemToCart(productId, quantity);
    setCart(response.cart);
  };

  // const handleRemoveFromCart = async (lineItemId) => {

  //   setCart(response.cart);
  // };

  // const handleEmptyCart = async () => {

  //   setCart(response.cart);
  // };

  // const refreshCart = async () => {
  //   setCart(newCart);
  // };

  // const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
  //   try {
  //     setOrder(incomingOrder);

  //     refreshCart();
  //   } catch (error) {
  //     setErrorMessage(error.data.error.message);
  //   }
  // };

  useEffect(() => {
    // fetch('http://localhost:5000/api')
    fetchProducts();
    fetchLoyalty();
    // fetchCart();
  }, []);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  return (
    <Router>
      <div style={{ display: "flex" }}>
        <p>{!apiData ? "Loading..." : ""}</p>
        <CssBaseline />
        <Navbar
          totalItems={cart.total_items}
          handleDrawerToggle={handleDrawerToggle}
        />
        <Switch>
          {/*      <Route exact path="/recentOrder">
          </Route>*/}
          {/*          <Route path="/cart">
            <Cart cart={cart} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart} onEmptyCart={handleEmptyCart} />
          </Route>
          <Route path="/checkout">
            <Checkout cart={cart} order={order} onCaptureCheckout={handleCaptureCheckout} error={errorMessage} />
          </Route>*/}
          <Route exact path="/">
            {/*{loyaltyBalance && <p>{loyaltyBalance}</p>}*/}
            <Products
              products={products}
              catalogImages={catalogImages}
              loyalty={loyalty}
              onAddToCart={handleAddToCart}
              handleUpdateCartQty={handleUpdateCartQty}
            />
            }
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;