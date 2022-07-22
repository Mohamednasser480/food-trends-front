import React from 'react'
import {ImageSection,ProductDetails} from "./index"
export default function Product({id}) {

  return (
    <div className='container flex flex-wrap'>
      <ImageSection/>
      <ProductDetails/>
    </div>
  )
}
