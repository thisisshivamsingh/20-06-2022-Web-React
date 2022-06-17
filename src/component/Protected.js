import { useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
function Protected(props) {
  const { Component } = props;
  const navigate = useNavigate();
  useEffect(() => {
    const login = localStorage.getItem("login");
    if (!login) {
      navigate("/login");
    }
  });
  return (
    <div>
      <Component />
    </div>
  );
}
export default Protected;
