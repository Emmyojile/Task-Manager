"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";

export default function Login() {
  const router = useRouter();
  const [error, setError] = useState("");

  // const session = useSession();
  const { data: session, status: sessionStatus } = useSession();

  useEffect(() => {
    if(session?.status === "authenticated") {
      router.replace("/dash")
    }
  },[session, router]);
  useEffect(() => {
    if (sessionStatus === "authenticated") {
      router.replace("/");
    }
  }, [sessionStatus, router]);

  const isValidEmail = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    if (!isValidEmail(email)) {
      setError("Email is invalid");
      return;
    }

    if (!password || password.length < 8) {
      setError("Password is invalid");
      return;
    }

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (res?.error) {
      setError("Invalid email or password");
      if (res?.url) router.push("/dash");
    } else {
      setError("");
    }
  };

  // const handleChange = (event) => {
  //   setFormData({ ...formData, [event.target.name]: event.target.value });
  // };

  // const handleSubmit = async (event) => {
  //   event.preventDefault();

  //   console.log("Submitted email:", formData.email);
  //   console.log("Submitted password:", formData.password);

  //   try {
  //     const response = await fetch("/api/Auth", {
  //       method: "POST",
  //       body: JSON.stringify(formData),
  //       headers: { "Content-Type": "application/json" },
  //     });

  //     if (!response.ok) {
  //       const errorData = await response.json();
  //       throw new Error(`Login failed: ${errorData.message}`);
  //     }

  //     // Handle successful login (e.g., store token, redirect)
  //     console.log("Login successful:", response.data);
  //     router.refresh();
  //     router.push("/")
  //   } catch (error) {
  //     setError(error.message);
  //     console.error("Login error:", error);
  //   }
  // };

  return (
    <div className="form-container">
      <div className="w-full p-6 bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-bold text-center text-gray-700">T-M-S</h1>
        <form className="mt-6"
        onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Email
            </label>
            <input
              type="text"
              className="login-input"
              placeholder="Email"
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
              placeholder="Password"
            />
          </div>
          <Link
            href="/forget"
            className="text-xs text-blue-600 hover:underline"
          >
          </Link>
          <div className="mt-2">
            <button className="submit-button"
            type="submit"
            >
              Login
            </button>
          </div>
          {error && <p className="error-message">{error}</p>}
        </form>

        <p className="mt-4 text-sm text-center text-gray-700">
          Don't have an account?{" "}
          <Link
            href="/Register"
            className="font-medium text-blue-600 hover:underline"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}