import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function AdminRedirectPage() {

  const navigate=useNavigate()
  useEffect(()=>{
      navigate("/")
  },[])

  return (
    <div>
      Redirecting...
    </div>
  )
}
