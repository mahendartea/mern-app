import React from 'react'
import { Loginbg } from '../../assets/';
import {Button, Input, Link} from '../../components';
import { useHistory } from "react-router-dom";

const Login = () => {
   let history = useHistory();
   return (
      <div className="flex flex-col md:flex-row">
         <div className="flex-1">
            {/* <p className="text-center m-4">Selamat Datang</p> */}
            <img src={Loginbg} alt="image" className="h-screen w-full"/>
         </div>
         <div className="bg-keempat lg:w-1/3 h-screen md:flex md:flex-col">
            <div className="">
               <h2 class="mt-10 text-center text-3xl font-semibold text-putih md:text-4xl">Login <span className="text-pertama">Form</span> </h2>
            </div>
            <div className="p-5 grid grid-flow-row"> 
               <div className="my-2 place-self-center">
                  <Input label="Email" placeholder="Email" type="email"/>
               </div>
               <div className="my-2 place-self-center">
                  <Input label="Password" placeholder="Password" type="password"/>
               </div>
               <div className="my-2 place-self-center">
                  <Button title="Login" onClick={()=>history.push('/')} type="button" className="shadow-md w-80 py-2 px-5 bg-kedua rounded-lg text-putih hover:text-hitam hover:bg-altsatu" />
               </div>
               <div className="my-2 place-self-center">
                  <Link title="Don't have an account yet? Register Now" onClick={()=>history.push('/register')}/>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Login
