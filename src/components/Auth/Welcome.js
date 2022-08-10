import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cookie } from "../../services";
import { getUserData } from "../../store/slices/auth";

export default function Welcome() {
  const dispatch = useDispatch();
  const token = cookie.getCookie("token");
  useEffect(() => {
    dispatch(getUserData(token));
  }, []);
  return <div>Welcome!!!!!!!!</div>;
}
