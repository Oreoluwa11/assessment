export default function Login() {
    return <div className="bg-blue-600 h-screen w-screen py-15">
    <div className="bg-white h-150 w-150 rounded-md mx-auto">
    <div className="p-10 grid items-center justify-center" >
        <p className="font-bold text-2xl text-center">Login to Account</p>
        <p className="text-gray-700 text-center mt-3" >Please enter your email and password to continue</p>
        <div className="">
            <p className="mt-10">Email address:</p>
            <input type="email" id="mail" placeholder="esteban_schiller@gmail.com" className='w-130 p-3 mt-3 border-1 border-gray-400 rounded-md bg-gray-100'/>
            <p className="mt-10">Password</p>
            <p className="ml-97 -mt-[25px] text-gray-700">Forget Password?</p>
            <input type="password" id="password" placeholder="* * * * *" className='w-130 p-3 font-bold mt-3 border-1 border-gray-400 rounded-md bg-gray-100'/>
            <div className="flex mt-5 gap-2 ">
                <input type="checkbox" name='' id='' />
                <p className="text-gray-700">Remember Password</p>
            </div>
            <button className="bg-blue-500 w-100 h-10 text-white rounded-md mt-10 ml-15">Sign In</button>
            <p className="text-center mt-4">Don't have an account? <a href="" className="text-blue-500">Create Account</a></p>
        </div>
    </div>
    </div>
</div>
};