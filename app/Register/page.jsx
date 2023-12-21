import Link from "next/link"

const page = () => {
  return (
    <div className="form-container">
      <div className="w-full p-6 bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-bold text-center text-gray-700">T-M-S</h1>
        <form className="mt-6">
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Email
            </label>
            <input
              type="email"
              className="login-input"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-800"
            >
              Username
            </label>
            <input
              type="username"
              className="login-input"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-800"
            >
              Password
            </label>
            <input
              type="password"
              className="login-input"
            />
          </div>
          
          <div className="mt-2">
            <button className="submit-button"
            
            >
              Register
            </button>
          </div>
        </form>

        <p className="mt-4 text-sm text-center text-gray-700">
          Have an account?{" "}
          <Link
            href="/signup"
            className="font-medium text-blue-600 hover:underline"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  )
}

export default page