import { Link, useNavigate } from "react-router-dom";

import logo from '../img/tvm-header-logo.png'
import Swal from "sweetalert2";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
const Navbar = () => {
const navigate=useNavigate()
const[isNavbar,setIsNavbar]=useState(false)

const user=JSON.parse(localStorage.getItem('userInfo'))

 const logOutUser=()=>{

    localStorage.removeItem('userInfo')
     Swal.fire(
        'success',
        'Succesfully LogOut',
        'success'
     )

    navigate('/')


 }















    return (
        <div className="my-4">

        <div className="flex items-center justify-around">
     
            <img className='w-[90px]' src={logo}></img>
      









           <div className='hidden md:block'>
            <ul className="space-x-8 flex items-center">
            <Link className="text-lg font-bold text-slate-500 hover:border-b-2 hover:border-yellow-500" to='/'>Home</Link>
           {
            user?<Link onClick={logOutUser} className="btn" >LogOut</Link>:<Link className="text-lg font-bold text-slate-500 hover:border-b-2 hover:border-yellow-500"  to='/login'>Login</Link>
           }
           
            {
                user? <div className="avatar">
                <div className="w-12">
                  <img className="rounded-full" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div></div>:''
            }
            </ul>
            
           </div>



<div className="md:hidden block">
<button onClick={()=>setIsNavbar(!isNavbar)}>{isNavbar?<RxCross1 className="text-xl"></RxCross1>:<FaBars className="text-xl"></FaBars>}</button>



</div>



           </div>



           <div className={ `md:hidden ${isNavbar?'block':'hidden'} my-6`}>
            <ul className="space-y-4 flex flex-col items-center mx-auto">
            <Link className="text-lg  mx-auto font-bold text-slate-500 hover:border-b-2 hover:border-yellow-500" to='/'>Home</Link>
           {
            user?<Link onClick={logOutUser} className="btn  mx-auto" >LogOut</Link>:<Link className="text-lg font-bold text-slate-500 hover:border-b-2 hover:border-yellow-500"  to='/login'>Login</Link>
           }
           
            {
                user? <div className="avatar">
                <div className="w-12">
                  <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div></div>:''
            }
            </ul>
            
           </div>



        </div>
    );
};

export default Navbar;