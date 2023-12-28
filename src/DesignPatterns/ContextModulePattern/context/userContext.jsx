import React, { createContext, useContext, useReducer, useState } from "react";
import { initialUserStateValue, userReducer } from "../reducer/userReducer";

export const UserStateContext = createContext(initialUserStateValue);
export const UserDispatchContext = createContext(null);

export const useUserStateContext = () => useContext(UserStateContext);
export const useUserDispatchContext = () => useContext(UserDispatchContext);

const UserProvider = ({ children }) => {
  // useReducer(reducer, initialArg, init?)
  const [state, dispatch] = useReducer(userReducer, initialUserStateValue);
  return (
    <UserStateContext.Provider value={state}>
      <UserDispatchContext.Provider value={dispatch}>
        {children}
      </UserDispatchContext.Provider>
    </UserStateContext.Provider>
  );
};

export default UserProvider;
