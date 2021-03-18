import React from 'react'

const Button = ({title,...rest}) => {
   return (
      <div className="md:my-5 my-2 place-self-center">
         <button {...rest} >{title}</button>
      </div>
   )
}


export default Button
