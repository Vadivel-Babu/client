import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import User from "./components/User";
import CreateUser from "./components/CreateUser";
import EditUser from "./components/EditUser";
import AuthUser from "./AuthUser";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <AuthUser>
                <User />
              </AuthUser>
            }
          />
          <Route
            path="/createuser"
            element={
              <AuthUser>
                <CreateUser />
              </AuthUser>
            }
          />
          <Route
            path="/edituser/:id"
            element={
              <AuthUser>
                {" "}
                <EditUser />
              </AuthUser>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
