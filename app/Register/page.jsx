"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const page = () => {
  const [error, setError] = useState("");
  const router = useRouter();


  const isValidEmail = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    if (!isValidEmail(email)) {
      setError("Email is invalid");
      return;
    }

    if (!password || password.length < 4) {
      setError("Password is invalid");
      return;
    }

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      if (res.status === 400) {
        setError("This email is already registered");
      }
      if (res.status === 200) {
        setError("");
        router.push("/Login");
      }
    } catch (error) {
      setError("Error, try again");
      console.log(error);
    }
  };


  // const [formData, setFormData] = useState({
  //   email: "",
  //   username: "",
  //   password: "",
  // });
  // const [error, setError] = useState(null);

  // const handleChange = (event) => {
  //   setFormData({ ...formData, [event.target.name]: event.target.value });
  // };
  // const handleRegister = async (event) => {
  //   event.preventDefault();

  //   try {
  //     const response = await fetch("/api/Users", {
  //       method: "POST",
  //       body: JSON.stringify(formData),
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });

  //     if (!response.ok) {
  //       const errorData = await response.json();
  //       throw new Error(`Registration failed: ${errorData.message}`);
  //     }

  //     // Handle successful registration (e.g., redirect to login page)
  //     const data = await response.json();
  //     console.log("Registration successful:", data.user);
  //     router.refresh();
  //     router.push("/Login"); // Redirect to login page
  //   } catch (error) {
  //     setError(error.message);
  //     console.error("Registration error:", error);
  //   }
  // };
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
              placeholder="Email"
              type="text"
              className="login-input"
              // onChange={handleChange}
              required
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
              // onChange={handleChange}
            />
          </div>

          <div className="mt-2">
            <button className="submit-button" type="submit">
              Register
            </button>
            <p className="text-red-600 text-[16px] mb-4">{error && error}</p>
          </div>
        </form>

        <p className="mt-4 text-sm text-center text-gray-700">
          Have an account?{" "}
          <Link
            href="/Login"
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
