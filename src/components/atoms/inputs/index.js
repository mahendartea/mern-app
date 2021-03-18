import React from 'react'

const Input = ({label, ...rest}) => {
   return (
      <div className="shadow-md w-80 p-2 flex text-putih flex-col bg-kedua rounded-lg">
         <p className="p-1 capitalize">{label}</p>
         <input {...rest} className="py-3 px-4 border border-pertama focus:outline-none rounded-md focus:ring-1 ring-cyan-500" />
      </div>
   )
}

export default Input
