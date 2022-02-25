const cart = [];

const handleCart = (state = cart, action) => {
  const product = action.payload;
  switch (action.type) {
    case "ADD_PRODUCT":
      const exist = state.find((item) => {
        return item.id === product.id;
      });
      if (exist) {
        return state.map((item) => {
          return item.id === product.id ? { ...item, qty: item.qty + 1 } : item;
        });
      } else {
        const product = action.payload;
        return [
          ...state,
          {
            ...product,
            qty: 1,
          },
        ];
      }
      break;

    case "DELETE_PRODUCT":
      return state.filter((item) => item.id !== product.id);
      break;

    case "MINUS_PRODUCT":
      return state.map((item) =>
        item.id === product.id ? { ...item, qty: item.qty - 1 } : item
      );
      break;

    case "PLUS_PRODUCT":
      return state.map((item) =>
        item.id === product.id ? { ...item, qty: item.qty + 1 } : item
      );
      break;

    default:
      return state;
      break;
  }
};

export default handleCart;
