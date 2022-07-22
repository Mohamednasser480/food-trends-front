import React from 'react';
import {useParams}    from "react-router"

export default function ProductPage() {
  let {id}=useParams();

  return (
    <div className='container'>
      Product Page {id}
    </div>
  )
}
