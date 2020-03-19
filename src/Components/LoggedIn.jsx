import React from 'react';
import { useSelector } from "react-redux"
import { Redirect } from "react-router-dom"

const LoggedIn = (props) => {
  const token = useSelector((state) => state.token)

  if (!token) {
    return props.children;
  }

  return <Redirect to='/' />
}

export default LoggedIn;
