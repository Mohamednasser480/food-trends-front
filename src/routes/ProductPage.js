import React from 'react';
import {useParams}    from "react-router"
import Product from "../components/Product"

export default function ProductPage() {
  let {id}=useParams();

  return (
    <Product id={id}/>
  )
}
