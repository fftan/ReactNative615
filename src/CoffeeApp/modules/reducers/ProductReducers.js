import { SELECTED_PRODUCT } from '../actions/Types';

const initialState = {
  payload: null,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECTED_PRODUCT: {
      return {
        ...state,
        payload: action.payload,
      };
    };
    default:
      return state;
  };
};

export default productReducer;