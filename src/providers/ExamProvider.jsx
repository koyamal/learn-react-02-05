import { createContext, useState } from "react";
import { CheckOrder2 } from "../checkOrder/CheckOrder2";
import CheckOrder22 from "../checkOrder/CheckOrder2";

export const ExamContext = createContext({});
console.log("ExamProvider.jsx");

export const UserProvider = (props) => {
  console.log("Inside of ExamProvider");
  const { children } = props;

  const [userInfo, setUserInfo] = useState(null);

  return (
    <ExamContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </ExamContext.Provider>
  );
};
