import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";

import { useAuthContext } from "./hooks/useAuthContext";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Layout from "./pages/Layout";
import Profile from "./pages/Profile";
import MyAccount from "./pages/MyAccount";

function App() {
  const { user } = useAuthContext();

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              path="login"
              element={!user ? <Login /> : <Navigate to="/" />}
            />
            <Route
              path="signup"
              element={!user ? <Signup /> : <Navigate to="/" />}
            />
            <Route
              path="profile"
              element={user ? <Profile /> : <Navigate to="/" />}
            />
            <Route
              path="myAccount"
              element={user ? <MyAccount /> : <Navigate to="/" />}
            />

            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
