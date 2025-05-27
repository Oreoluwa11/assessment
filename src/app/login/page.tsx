import Link from 'next/link';

export default function Login() {
  return (
    <div className="bg-[url('/images/backgroung.png')] bg-cover bg-center min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md mx-4 bg-white p-6 rounded-2xl shadow-lg">
        <div>
          <p className="font-bold text-2xl text-center mb-2">Login to Account</p>
          <p className="text-gray-700 text-center mb-6">Please enter your email and password to continue</p>

          <div className="space-y-6">
            <div>
              <label htmlFor="mail" className="block mb-1">Email address:</label>
              <input
                type="email"
                id="mail"
                placeholder="esteban_schiller@gmail.com"
                className="w-full p-2 border border-gray-400 rounded-md bg-gray-100"
              />
            </div>

            <div>
              <label htmlFor="password" className="block mb-1">Password</label>
              <div className="flex justify-between items-center text-sm text-gray-700 mb-1">
                <span></span>
                <a href="#" className="hover:underline">Forget Password?</a>
              </div>
              <input
                type="password"
                id="password"
                placeholder="* * * * *"
                className="w-full p-2 font-bold border border-gray-400 rounded-md bg-gray-100"
              />
            </div>

            <div className="flex items-center gap-2 text-gray-700 text-sm">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember Password</label>
            </div>

            <Link href="/favorite" className="block">
              <button className="w-full bg-blue-500 h-10 text-white rounded-md mt-4 hover:bg-blue-600">
                Sign In
              </button>
            </Link>

            <p className="text-center text-sm mt-4">
              Don&apos;t have an account?{' '}
              <a href="#" className="text-blue-500 hover:underline">Create Account</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
