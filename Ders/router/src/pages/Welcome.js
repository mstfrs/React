import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";

const Welcome = () => {
  return (
    <div>
      <h1>Welcome page</h1>
      {/* <Routes>
        <Route path="new-user" element={<p>Welcome New Users</p>} />
      </Routes> */}
      <Outlet />
    </div>
  );
};

export default Welcome;
