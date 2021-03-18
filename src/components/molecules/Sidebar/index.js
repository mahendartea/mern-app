import React from 'react'

const Sidebar = () => {
   const sidebutton = 'mb-1 p-2 hover:bg-ketiga text-kedua hover:text-putih cursor-pointer rounded-l-md';
   return (
      <div >
         <div className="text-center mb-5 p-3">
            <p className="font-bold uppercase">Configuration</p>
         </div>

         <ul className="">
            <li className="font-bold border-r-2 text-altsatu border-keempat bg-ketiga rounded-l-md mb-1 p-2">POST</li>
            <li className={sidebutton}>POST</li>
            <li className={sidebutton}>POST</li>
            <li className={sidebutton}>POST</li>
            <li className={sidebutton}>POST</li>
            <li className={sidebutton}>POST</li>
         </ul>
      </div>
   )
}

export default Sidebar
