import { ExamProvider } from "./providers/ExamProvider";
import { UserProvider } from "./providers/UserProvider";

import { Router } from "./router/Router";
import "./styles.css";

console.log("App.js");

export default function App() {
  console.log("Inside of App");
  return (
    <UserProvider>
      <Router />
    </UserProvider>
  );
}
