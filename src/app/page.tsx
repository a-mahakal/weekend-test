"use client";
import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Form submission handler
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Basic validation
    if (!email || !password) {
      setError("Both fields are required.");
      return;
    }

    // Simulate a login process
    console.log("Email:", email);
    console.log("Password:", password);
    setError(""); // Clear error on successful submission
    alert("Logged in successfully!");
  };

  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 sm:p-20 gap-16 font-[var(--font-geist-sans)]">
      {/* Header */}
      <header className="row-start-1 text-center">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={38}
          priority
        />
      </header>

      {/* Main Content */}
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-sm bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold text-center">Login</h2>
          
          {error && <p className="text-red-500 text-center">{error}</p>}

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="font-medium text-sm">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="font-medium text-sm">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-4"
          >
            Login
          </button>
        </form>


      </main>
    </div>
  );
}
