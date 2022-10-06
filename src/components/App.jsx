import { Route, Routes } from "react-router-dom";
import Home from "pages/Home";
import SharedLayout from "./SharedLayout/SharedLayout";
import Login from "pages/Login";
import Register from "pages/Register";
import Phonebook from "pages/Phonebook";


const App = () => {
  return (
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="phonebook" element={<Phonebook />} />
          <Route path="*" element={<div>Page not found!!!</div>} />
        </Route>
      </Routes>
  )
};

export default App;
