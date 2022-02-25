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

// For Minus Item From Cart
export const minusProuduct = (product) => {
  return {
    type: "MINUS_PRODUCT",
    payload: product,
  };
};

// For Plus Item From Cart
export const plusProduct = (product) => {
  return {
    type: "PLUS_PRODUCT",
    payload: product,
  };
};
