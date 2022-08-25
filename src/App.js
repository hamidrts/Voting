import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./component/Navbar";
import { useAuthContext } from "./hooks/useAuthContext";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Layout from "./pages/Layout";

function App() {
  const { user } = useAuthContext();
  console.log(user);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/voting/app/" element={<Layout />}>
            <Route
              path="login"
              element={!user ? <Login /> : <Navigate to="/voting/app/" />}
            />
            <Route
              path="signup"
              element={!user ? <Signup /> : <Navigate to="/voting/app/" />}
            />
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
