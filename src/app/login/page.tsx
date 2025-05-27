import Link from 'next/link';

export default function Login() {
    return <div className="bg-[url('/images/backgroung.png')] bg-cover bg-center w-screen h-screen">
    <div className="z-20  max-w-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mx-auto bg-white p-4 md:p-2 rounded-2xl shadow-lg flex  justify-center ">
    <div className="mb-9 mt-5 p-4" >
        <p className="font-bold text-2xl text-center mb-2">Login to Account</p>
        <p className="text-gray-700 text-center mb-5" >Please enter your email and password to continue</p>

        <div className="">
            <p className="space-y-2">Email address:</p>

            <input type="email" id="mail" placeholder="esteban_schiller@gmail.com" className='w-100 p-2 mt-3 border-1 border-gray-400 rounded-md bg-gray-100'/>

            <p className="mt-10">Password</p>

            <p className="ml-67 -mt-[25px] text-gray-700">Forget Password?</p>

            <input type="password" id="password" placeholder="* * * * *" className='w-100 p-2 font-bold mt-3 border-1 border-gray-400 rounded-md bg-gray-100'/>

            <div className="flex mt-5 gap-2 ">
                <input type="checkbox" name='' id='' />
                <p className="text-gray-700">Remember Password</p>
            </div>

            <Link href="/favorite" className='flex justify-center'>
            <button className="bg-blue-500 w-85 h-10 text-white rounded-md mt-10  ">
            Sign In
            </button>
            </Link>

            <p className="text-center mt-4">Don&apos;t have an account? 
                <a href="" className="text-blue-500 hover:underline">Create Account</a>
            </p>
        </div>
    </div>
    </div>
</div>
};