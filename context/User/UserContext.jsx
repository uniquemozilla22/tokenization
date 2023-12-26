import { createContext, useReducer } from "react";
import { USERLOGIN } from "../ActionTypes";
const initialState = {
  token: "",
};
const UserContext = createContext();

const iniitalState = {
  token: "",
};

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (action.type) {
    case USERLOGIN: {
      
    }
    default:
      return state;
  }
};

const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleLogin = (username, password) => {};

  return (
    <UserContext.Provider value={initialState}>{children}</UserContext.Provider>
  );
};

export default UserContextProvider;
