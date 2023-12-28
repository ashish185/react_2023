import React from "react";
import UserProvider from "../context/userContext";
import { UserDetails } from "./UserDetails";

const ContextModulePattern = () => {
  return (
    <UserProvider>
      <UserDetails />
    </UserProvider>
  );
};

export default ContextModulePattern;
