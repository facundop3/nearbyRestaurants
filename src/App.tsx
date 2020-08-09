import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import HomePage from "./components/HomePage";
import { getUserLocalStorage } from "./utils";
import { User } from "./interfaces";

function App() {
  const storedUser = getUserLocalStorage();
  const [user, setUser] = useState<User | null>(storedUser);
  return (
    <Router>
      <Route path="/login">
        <div className="App">
          <Login setUser={setUser} user={user} />
        </div>
      </Route>
      <PrivateRoute exact path="/" user={user}>
        <HomePage user={user} />
      </PrivateRoute>
    </Router>
  );
}

export default App;
