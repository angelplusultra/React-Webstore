import { USDollar } from "../helpers/price_converter";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../features/shopping_cart/shopping_cart";

export function Item({ id, name, img, price, setShoppingCart }) {
  const dispatch = useDispatch();
  const shoppingCart = useSelector((store) => store.shoppingCart);
  const addToCartRedux = () => {
    return dispatch(addItem({ id, name, price }));
  };

  const addToCart = () => {
    setShoppingCart((prev) => {
      const itemInCart = prev.find((item) => item.id === id);
      console.log(itemInCart);
      if (!itemInCart) {
        return [...prev, { id, name, price, quantity: 1 }];
      }
      return prev.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    });
  };

  return (
    <div>
      <p>{name}</p>
      <p>{USDollar.format(price)}</p>
      <button onClick={addToCartRedux}>Add to Cart</button>
    </div>
  );
}
