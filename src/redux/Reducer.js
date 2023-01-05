
export const init={
  numberCart:0,
  Carts:[],
  datas:[],
}

const cartreds = (state = init, action) => {
  switch (action.type) {
    case "add":
                return {
                ...state,
                "Carts":[...state.Carts,action.payload],
                }
      // const alreadypres = init.carts.findIndex(
      //   (iteam) => iteam.id === action.payload.id
      // );
      // if (alreadypres >= 0) {
      //   init.carts[alreadypres].qnty += 1;
      // } else {
      //   const temp = { ...action.payload, qnty: 1 };
      //   return {
      //     ...init.carts,
      //     carts: [...init.carts, temp],
      //   };
      
      
    case "rmv":
      const data = state.Carts.filter((el) => el.id !== action.payload);
      return {
        ...state,
        carts: data,
      };
    case "decre":
      const alreadypresdec = init.carts.findIndex(
        (iteam) => iteam.id === action.payload.id
      );
      if (init.carts[alreadypresdec].qnty >= 1) {
        init.carts[alreadypresdec].qnty -= 1;
        return {
          ...state,
          carts: [...init.carts],
        };
      } else if (init.carts[alreadypresdec].qnty === 0) {
        const data = init.carts.filter((el) => el.id !== action.payload);
        return {
          ...state,
          carts: data,
        };
      }
    case "get-data":
      return { loading: true, datas: [] };
    case "get-data-sucess":
      return { loading: false, datas: action.payload };
    case "get-data-fail":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export default cartreds;
