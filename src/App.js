import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Chat from "./Chat";
import { login, selectUser, logout } from "./features/userSlice";
import { auth } from "./firebase";
import Login from "./Login";
import Sidebar from "./Sidebar";

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //the user is logged in
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName
          })
        )
      } else {
        //the user is logged out
        dispatch(logout());
      }
    })
  }, [dispatch])
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
          <Login />
        )
      }

      {/* <div>
        <Sidebar />
        <Chat />
      </div> */}

    </div>
  );
}

export default App;