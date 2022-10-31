import { createContext, useState } from "react";

export const UserContext = createContext({});
console.log("UserProvider.jsx");

export const UserProvider = (props) => {
  console.log("Inside of UserProvider");
  const { children } = props;

  const [userInfo, setUserInfo] = useState(null);

  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};
