import React, { useState, useEffect } from "react";
import { HiOutlineMinusSm, HiOutlinePlusSm } from "react-icons/hi";

const QuantityInput = (props) => {
  const { cartProduct, onQuantitySubmit } = props;
  const [quantity, setQuantity] = useState(cartProduct.quantity ?? 1);
  const [allowSubmit, setAllowSubmit] = useState(false);
  const commonBtnClasses =
    "absolute top-0 h-full transition-colors min-w-[3rem] rounded-md bg-transparent text-black hover:bg-primary hover:text-white max-w-[33.333%]";

  useEffect(() => {
    if (allowSubmit) {
      onQuantitySubmit(quantity);
    }
  }, [quantity, allowSubmit]);

  const quantityIncreaseHandler = () => {
    if (quantity >= cartProduct.inStock) return;
    setQuantity((quantity) => quantity + 1);
    setAllowSubmit(true);
  };

  const quantityDecreaseHandler = () => {
    if (quantity <= 1) return;
    setQuantity((quantity) => quantity - 1);
    setAllowSubmit(true);
  };

  const quantityInputHandler = () => {
    setQuantity((quantity) => {
      if (quantity > cartProduct.inStock) return cartProduct.inStock;
      if (quantity < 1) return 1;
      return quantity;
    });
    setAllowSubmit(true);
  };

  const enterPressed = (e) => {
    if (e.key !== "Enter") return;
    quantityInputHandler();
  };

  const onQuantityChange = (e) => {
    setQuantity(+e.target.value);
    setAllowSubmit(false);
  };

  return (
    <div className="relative min-w-[7rem] max-w-[10rem]">
      <button
        type="button"
        onClick={quantityDecreaseHandler}
        className={`${commonBtnClasses} left-0`}
      >
        <HiOutlineMinusSm className="absolute left-1/2 top-1/2 h-5 w-5 -translate-y-1/2 -translate-x-1/2 stroke-1" />
      </button>
      <input
        className="min-h-12 w-full appearance-none rounded-md border border-transparent bg-base-200 text-center outline-0 focus:border-primary focus:bg-white"
        type="number"
        min="1"
        step="1"
        max={cartProduct.inStock}
        size="4"
        value={`${quantity}`}
        inputMode="numeric"
        onChange={onQuantityChange}
        onBlur={quantityInputHandler}
        onKeyDown={enterPressed}
      />
      <button
        type="button"
        onClick={quantityIncreaseHandler}
        className={`${commonBtnClasses} right-0`}
      >
        <HiOutlinePlusSm className="absolute left-1/2 top-1/2 h-5 w-5 -translate-y-1/2 -translate-x-1/2 stroke-1" />
      </button>
    </div>
  );
};

export default QuantityInput;
