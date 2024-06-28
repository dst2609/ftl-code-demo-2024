import React from "react";
import { Outlet } from "react-router-dom";

const TeamPage = () => {
  return (
    <div>
      <h1>Welcome to the Team page </h1>
      <Outlet/>
    </div>
  );
};

export default TeamPage;
