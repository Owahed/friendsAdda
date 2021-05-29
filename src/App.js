import React from "react";
import "./App.css";
import Chat from "./Chat";
import Sidebar from "./Sidebar";

function App() {
    return (
        <div className="app">
            <Sidebar />
            <Chat />
            {/* this is so blaaa.. */}
        </div>
    );
}

export default App;