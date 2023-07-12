import React from 'react'

export default function ViewCourses({Course}) {
    
  return (
    <>

    <h1>{Course.name}</h1>
    <span>{Course.desc}</span>
    <hr />
    </>
  )
}
