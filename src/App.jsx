import { StrictMode } from "react";
import From from "./components/From";
import UserList from "./pages/UserList.jsx";

function App() {
  return (
    <StrictMode>
      <div>
        <h1>I'm gonna learn React Testing Library</h1>
        <From />
      </div>
    </StrictMode>
  );
}

export default App;
