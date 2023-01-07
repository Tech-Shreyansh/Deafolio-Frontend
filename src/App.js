import React from 'react';
import LoginApp from './Auth/Login/login';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return <BrowserRouter>
  <Routes>
    <Route path="/login" element={<LoginApp />} ></Route>
    {/* <Route path="/signup" element={<SignUp />}></Route>
    <Route path="/authphone" element={<Phone />}></Route>
    <Route path="/otp" element={<OTP />}></Route>
    <Route path="/phoneotp" element={<PhoneOTP />}></Route>
    <Route path="/forgot_password" element={<Forgot />}></Route>
    <Route path="/reset_password" element={<Resetpass />}></Route>
    <Route path="/set_password" element={<Setpass />}></Route> */}
  </Routes>
</BrowserRouter>;
}

export default App;
