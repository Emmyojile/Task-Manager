"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const page = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  });
  const [error, setError] = useState(null);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleRegister = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("/api/Users", {
        method: "POST",
        body: JSON.stringify({formData}),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Registration failed: ${errorData.message}`);
      }

      // Handle successful registration (e.g., redirect to login page)
      console.log("Registration successful:", response.data);
      router.refresh();
      router.push("/Login"); // Redirect to login page
    } catch (error) {
      setError(error.message);
      console.error("Registration error:", error);
    }
  };
  return (
    <div className="form-container">
      <div className="w-full p-6 bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-bold text-center text-gray-700">T-M-S</h1>
        <form onSubmit={handleRegister} className="mt-6">
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Email
            </label>
            <input
              name="email"
              type="email"
              className="login-input"
              onChange={handleChange}
            />
          </div>
          <div className="mb-2">
            <label className="block text-sm font-semibold text-gray-800">
              Username
            </label>
            <input
              name="username"
              type="username"
              className="login-input"
              onChange={handleChange}
            />
          </div>
          <div className="mb-2">
            <label className="block text-sm font-semibold text-gray-800">
              Password
            </label>
            <input
              name="password"
              type="password"
              className="login-input"
              onChange={handleChange}
            />
          </div>

          <div className="mt-2">
            <button className="submit-button" type="submit">
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
  );
};

export default page;
