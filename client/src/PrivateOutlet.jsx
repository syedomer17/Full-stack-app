import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const PrivateOutlet = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      toast("No token provided");
      setTimeout(() => {
        navigate("/login", { replace: true });
      }, 2000);
    }
  }, [token, navigate]);

  return (
    <>
      {token ? <Outlet /> : null}
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </>
  );
};

export default PrivateOutlet;
