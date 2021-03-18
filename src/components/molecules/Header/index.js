import React from 'react'
import { useHistory } from "react-router-dom";
import Logo from '../../../assets/icons/messenger.png';

const Header = () => {
   
   const navButton = 'text-center cursor-pointer hover:text-putih px-4 py-2 text-putih font-semibold hover:bg-keempat rounded-md';
   let history = useHistory();
   
   return (
      <div className="flex bg-ketiga px-10 py-3 items-center justify-between flex-col sm:flex-row shadow-md">
        
         <div>
            <p onClick={()=>history.push('/')} className="cursor-pointer border-1 bg-putih rounded-md text-kedua px-5 py-2 font-bold uppercase shadow-md"><span><img src={Logo} alt="Logo" className="h-6 w-6 inline mr-2"></img></span>Elearning Indonesia</p>
         </div>
         
         <div className="grid md:grid-cols-6 lg:gap-4">
            <p className={navButton}>Home</p>
            <p className={navButton}>Material</p>
            <p className={navButton}>Material</p>
            <p className={navButton}>Material</p>
            <p className={navButton}>Material</p>
            <p className={navButton}>Material</p>
         </div>
         
         <div>
            <button onClick={()=>history.push('/login')} className="cursor-pointer shadow-md capitalize font-semibold text-sm px-5 text-putih py-2 bg-kedua hover:bg-keempat rounded-md">Logout</button>
         </div>

      </div>
   )
}

export default Header
