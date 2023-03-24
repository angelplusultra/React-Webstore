import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../features/shopping_cart/shopping_cart";
import { USDollar } from "../helpers/price_converter";
export function ShoppingCart({ setShoppingCart, setShowShoppingCart }) {
  const dispatch = useDispatch();
  const shoppingCart = useSelector((store) => store.shoppingCart.value);

  let total = 0;
  shoppingCart.forEach((item) => {
    total = total + item.price * item.quantity;
  });

  // Format the price above to USD using the locale, style, and currency.

  // const removeOneFromCart = (id) => {
  //   setShoppingCart((prev) => {
  //     return prev
  //       .map((item) => {
  //         if (item.id === id) {
  //           if (item.quantity === 1) {
  //             return false;
  //           }
  //           return { ...item, quantity: item.quantity - 1 };
  //         }

  //         return item;
  //       })
  //       .filter((item) => item);
  //   });
  // };

  if (shoppingCart.length === 0) {
    return (
      <>
        "Shopping Cart Empty"
        <button onClick={() => setShowShoppingCart(false)}>
          Back to Store
        </button>
      </>
    );
  }
  return (
    <div>
      {shoppingCart.map((item) => (
        <div key={item.id}>
          <h3>{item?.name}</h3>
          <p>Quantity: {item?.quantity}</p>
          <button onClick={() => dispatch(addItem({ id: item.id }))}>+</button>
          <button onClick={() => dispatch(removeItem({ id: item.id }))}>
            -
          </button>
        </div>
      ))}
      <button onClick={() => console.log(shoppingCart)}>Checkout</button>
      <button onClick={() => setShowShoppingCart(false)}>Back to Store</button>
      <p>Total: {USDollar.format(total)}</p>
    </div>
  );
}
