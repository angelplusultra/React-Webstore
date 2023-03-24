import { useSelector } from "react-redux";
import { Item } from "./Item";

export function WebStore({ setShoppingCart, setShowShoppingCart }) {
  let totalItems = 0;

  const shoppingCart = useSelector((store) => store.shoppingCart.value);
  shoppingCart.forEach((item) => (totalItems += item.quantity));
  return (
    <div>
      <h1>{totalItems} Items in Cart</h1>
      <Item
        id={1}
        setShoppingCart={setShoppingCart}
        price={25}
        name="Glasses"
      />
      <Item
        id={2}
        setShoppingCart={setShoppingCart}
        price={25}
        name="Television"
      />
      <Item id={3} setShoppingCart={setShoppingCart} price={25} name="Iphone" />
      <Item
        id={4}
        setShoppingCart={setShoppingCart}
        price={49.99}
        name="Watch"
      />
      <Item
        id={5}
        setShoppingCart={setShoppingCart}
        price={27.99}
        name="Microwave"
      />
      <button onClick={() => setShowShoppingCart(true)}>
        See Shopping Cart
      </button>
    </div>
  );
}
