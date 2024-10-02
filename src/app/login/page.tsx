import Head from 'next/head';

function LoginPage() {
  return (
    <div>
      <Head>
        <title>Login - CoffeeLab</title>
        <meta name="description" content="Login to your CoffeeLab account" />
      </Head>

      <div className="min-h-screen bg-[#2e1a0f] flex items-center justify-center">
        <div className="bg-[#3c2715]  p-8 rounded-lg shadow-md w-96">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Login</h2>
          <form>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                className="w-full px-3 py-2 rounded-md bg-[#5e3b21] text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#744e2a]"
                placeholder="Email"
              />
            </div>
            <div className="mb-6">
              <input
                type="password"
                name="password"
                className="w-full px-3 py-2 rounded-md bg-[#5e3b21] text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#744e2a]"
                placeholder="Password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#5e3b21] text-white px-4 py-2 rounded-md hover:bg-[#744e2a] focus:outline-none focus:ring-2 focus:ring-[#744e2a]"
            >
              Login
            </button>
          </form>
          <div className="flex justify-between mt-4 text-gray-400 text-sm">
            <a href="#" className="hover:underline">
              Forgot Password?
            </a>
            <a href="#" className="hover:underline">
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
