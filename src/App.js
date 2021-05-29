import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Chat from "./Chat";
import { selectUser } from "./features/userSlice";
import Login from "./Login";
import Sidebar from "./Sidebar";

function App() {
  const user = useSelector(selectUser);
  return (
    <div className="app">
      {user ?

        (
          <div>
            <Sidebar />
            <Chat />
          </div>
        )
        : (
          <Login/>
        )
      }

    </div>
  );
}

export default App;