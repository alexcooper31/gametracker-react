import React from 'react';
import { useSelector } from "react-redux"
import { Redirect } from "react-router-dom"

const Protected = (props) => {
  const token = useSelector((state) => state.token)

  if (!token) {
    return <Redirect to='/login' />
  }

  return props.children;
}

export default Protected;
