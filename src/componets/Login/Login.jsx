import { useNavigate } from "react-router-dom";


const Login = () => {

const navigate=useNavigate()

    const formHandler=e=>{
        e.preventDefault()
    
        const userName=e.target.username.value
        const email=e.target.email.value
        
    
     const userInfo={userName,email}


     localStorage.setItem('userInfo', JSON.stringify(userInfo))

     Swal.fire(
        'success',
        'Succesfully LogIn',
        'success'
     )
 navigate('/')


    
    console.log(userInfo)
    }






    return (
        <div>
            <div className="w-full max-w-md p-8 space-y-3 rounded-xl border bg-white   font-sans mx-auto">
        <h1 className="text-3xl font-bold text-center text-indigo-600">Login</h1>
        {/* Input fields and the form started */}
        <form onSubmit={formHandler}  className="space-y-6">
            <div className="space-y-2 text-sm">
                <label htmlFor="username" className="block ">
                    Your name
                </label>
                <input type="text" name="username" id="username" placeholder="Username" className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring  " required/>
            </div>


            <div className="space-y-2 text-sm">
                <label htmlFor="email" className="block ">
            Email
                </label>
                <input type="email" name="email" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring  " required/>
                
            </div>




            <div className="space-y-2 text-sm">
                <label htmlFor="password" className="block ">
                    Password
                </label>
                <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring  " />
                
            </div>
            {/* Sign in Button */}
            <button className="text-lg rounded-xl relative p-[10px] block w-full bg-indigo-600 text-white border-y-4 duration-500 overflow-hidden focus:border-indigo-500 z-50 group">
                Log In
                <span className="absolute opacity-0 group-hover:opacity-100 duration-100 group-hover:duration-1000 ease-out flex justify-center inset-0 items-center z-10 text-white">
                    Let's go
                </span>
                <span className="bg-indigo-800 absolute inset-0 -translate-y-full group-hover:translate-y-0 group-hover:duration-1000"></span>
                <span className="bg-indigo-800 absolute inset-0 translate-y-full group-hover:translate-y-0 group-hover:duration-1000"></span>
                <span className="bg-indigo-800 absolute inset-0 translate-x-full group-hover:translate-x-0 group-hover:delay-300 delay-100 duration-1000"></span>
                <span className="bg-indigo-800 absolute inset-0 -translate-x-full group-hover:translate-x-0 group-hover:delay-300 delay-100 duration-1000"></span>
            </button>
        </form>
       </div>
        </div>
    );
};

export default Login;