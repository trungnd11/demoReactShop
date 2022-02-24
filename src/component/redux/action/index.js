// For add Item to cart
export const addCart = (product) => {
  return {
    type: "ADD_PRODUCT",
    payload: product,
  };
};

// For Delete Item From Cart
export const deleteCart = (product) => {
  return {
    type: "DELETE_PRODUCT",
    payload: product,
  };
};
