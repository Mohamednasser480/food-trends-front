import React, { useState, useEffect } from "react";
import { HiOutlineMinusSm, HiOutlinePlusSm } from "react-icons/hi";
import { Button } from "../UI";

const QuantityInput = (props) => {
  const { value, onQuantityInput, stock } = props;
  const [quantity, setQuantity] = useState(value);
  const [allowSubmit, setAllowSubmit] = useState(false);
  const commonBtnClasses =
    "absolute top-0 h-full transition-colors min-w-[3rem] rounded-md bg-transparent text-black hover:bg-primary hover:text-white max-w-[33.333%]";

  useEffect(() => {
    if (allowSubmit) {
      onQuantityInput(quantity);
    }
  }, [quantity, allowSubmit, onQuantityInput]);

  const quantityIncreaseHandler = () => {
    if (quantity >= stock) return;
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
      if (quantity > stock) return stock;
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
        <HiOutlineMinusSm className="h-5 w-5 stroke-1 absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2" />
      </button>
      <input
        className="min-h-12 focus:bg-white outline-0 rounded-md focus:border-primary border border-transparent w-full appearance-none text-center bg-base-200"
        type="number"
        min="1"
        step="1"
        max={stock}
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
        <HiOutlinePlusSm className="h-5 w-5 stroke-1 absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2" />
      </button>
    </div>
  );
};

export default QuantityInput;
