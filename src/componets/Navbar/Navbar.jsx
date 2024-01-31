import { Link, useNavigate } from "react-router-dom";

import logo from '../img/tvm-header-logo.png'
import Swal from "sweetalert2";
import userImage from '../img/'
const Navbar = () => {
const navigate=useNavigate()


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











console.log(user)



    return (
        <div className="my-4">

        <div className="flex items-center justify-around">
     
            <img className='w-[90px]' src={logo}></img>
      

           <div className="">
            <ul className="space-x-8">
            <Link className="text-lg font-bold text-slate-500 hover:border-b-2 hover:border-yellow-500" to='/'>Home</Link>
           {
            user?<Link onClick={logOutUser} className="btn" >LogOut</Link>:<Link className="text-lg font-bold text-slate-500 hover:border-b-2 hover:border-yellow-500"  to='/login'>Login</Link>
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




        </div>
    );
};

export default Navbar;