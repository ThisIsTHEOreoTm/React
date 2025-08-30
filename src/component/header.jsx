import './header.css'
import React from 'react';

let header = ({title, children}) =>{
  return(
    <>
     <div className="Titles">
        <h1>{title}</h1>
        <div>{children}</div>
     </div>
    </>
  )

}
export default header