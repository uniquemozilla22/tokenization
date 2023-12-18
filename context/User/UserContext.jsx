import { createContext } from "react";
const initialState = {
  token: "",
};
const UserContext = createContext();
const UserContextProvider = ({ children }) => {
  return (
    <UserContext.Provider value={initialState}>{children}</UserContext.Provider>
  );
};

export default UserContextProvider;
