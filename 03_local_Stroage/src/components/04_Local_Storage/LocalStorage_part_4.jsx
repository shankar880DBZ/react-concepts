import React, { useEffect, useState } from "react";

const LocalStorage_part_4 = () => {
  const [cart, setCart] = useState( JSON.parse(localStorage.getItem("cart")) || []);

  useEffect(()=>{
    localStorage.setItem("cart", JSON.stringify(cart));
  },[cart]);

  const handleAddCart = () => {
    setCart([...cart, { name: "Shoes", price: 1000 }]);
  };

  const removeItem = (index) => {
    setCart(
      cart.filter((_, i) => {
        i !== index;
      }),
    );
  };

  return (
    <>
      <button onClick={handleAddCart}>AddCart</button>
      {cart.map((item, indx) => {
        return (
          <p key={indx}>
            {`${item.name} and ${item.price}`}{" "}
            <button onClick={() => removeItem(indx)}>Remove</button>{" "}
          </p>
        );
      })}
    </>
  );
};

export default LocalStorage_part_4;
