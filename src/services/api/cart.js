const getItems = () => {
  return JSON.parse(localStorage.getItem("cartItems")) || [];
};

export default { getItems };
