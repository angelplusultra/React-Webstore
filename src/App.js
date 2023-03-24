import "./styles.css";
import { useEffect, useState } from "react";
import { WebStore } from "./components/WebStore";
import { ShoppingCart } from "./components/ShoppingCart";
import { useSelector } from "react-redux";

export default function App() {
  /* OLD STATE SOLUTION */
  // const [shoppingCart, setShoppingCart] = useState(() => {
  //   return JSON.parse(localStorage.getItem("SHOPPING_CART")) || [];
  // });

  const [showShoppingCart, setShowShoppingCart] = useState(false);
  const shoppingCart = useSelector((state) => state.shoppingCart.value);

  useEffect(() => {
    localStorage.setItem("SHOPPING_CART", JSON.stringify(shoppingCart));
  }, [shoppingCart]);

  if (showShoppingCart) {
    return <ShoppingCart setShowShoppingCart={setShowShoppingCart} />;
  }
  return (
    <div className="App">
      <WebStore setShowShoppingCart={setShowShoppingCart} />
    </div>
  );
}
