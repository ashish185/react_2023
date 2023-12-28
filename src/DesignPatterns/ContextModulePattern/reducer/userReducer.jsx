import { UPDATE_NAME_FIELD } from "../user-constant";

export const initialUserStateValue = {
  userDetails: {
    firstName: "",
    lastName: "",
    address: "",
  },
};

export const userReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case UPDATE_NAME_FIELD:
        console.log("payload", payload);
      return {
        ...state.userDetails,
        userDetails:{
            ...payload
        }
      };
    default: {
      return state;
    }
  }
};
