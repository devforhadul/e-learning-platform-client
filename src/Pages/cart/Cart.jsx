import { useCart } from "@/Providers/CartProvider";
import React from "react";

export default function Cart() {
  const { cartItem } = useCart();

  const handleCartDelete = (title) => {
    const result = confirm("Are you sure you want to delete this item?");
    if (result) {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      const updateCart = cart.filter((c) => c?.title !== title);
      localStorage.setItem("cart", JSON.stringify(updateCart));
    }else{
      alert("Not delete")
    }
  };
  return (
    <div>
      <div>
        {cartItem.map((cart, idx) => (
          <ul key={idx} className="border m-5 p-3">
            <ul>Title: {cart?.title}</ul>
            <ul>Price: {cart?.price}</ul>
            <button
              onClick={() => handleCartDelete(cart?.title)}
              type="button"
              className="px-4 py-2 bg-slate-600 text-white cursor-pointer hover:bg-slate-900 rounded-sm"
            >
              Delete
            </button>
          </ul>
        ))}
      </div>
    </div>
  );
}
