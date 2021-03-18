import React from 'react';
import { Registerbg } from '../../assets/';
import {Button, Input, Link} from '../../components';
import { useHistory } from "react-router-dom";

const Register = () => {
   let history = useHistory();
   return (
      <div className="flex flex-col md:flex-row">
         <div className="flex-1 bg-yellow-100">
            {/* <p className="text-center m-4">Selamat Datang</p> */}
            <img src={Registerbg} alt="image" className="h-full w-full"/>
         </div>
         <div className="bg-keempat lg:w-1/3 h-screen md:flex md:flex-col">
            <div className="">
               <h2 class="mt-10 text-center text-3xl font-semibold text-gray-800 md:text-4xl">Register <span class="text-yellow-500">Form</span></h2>
            </div>
            <div className="p-5 grid grid-flow-row"> 
               <div className="my-2 place-self-center">
                  <Input label="Full Name" placeholder="Full Name" type="text"/>
               </div>
               <div className="my-2 place-self-center">
                  <Input label="Email" placeholder="Email" type="email"/>
               </div>
               <div className="my-2 place-self-center">
                  <Input label="Password" placeholder="Password" type="password"/>
               </div>
               <div className="my-2 place-self-center">
                  <Button title="Register" type="button" className="shadow-md w-80 py-2 px-5 bg-kedua rounded-lg text-putih hover:text-hitam hover:bg-altsatu" />
               </div>
               <div className="my-2 place-self-center">
                  <Link title="Already have an account? Sign In" onClick={()=>history.push('/login')}/>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Register
