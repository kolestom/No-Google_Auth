import { createContext, useState } from "react";
const userContext = createContext();

export const UserProvider = ({ children }) => {

  const [token, setToken] = useState('');
  const [loggedInUser, setLoggedInUser] = useState();

  return (
    <userContext.Provider value={{ token, setToken, loggedInUser, setLoggedInUser }}>
      {children}
    </userContext.Provider>
  );
};

export default userContext;
