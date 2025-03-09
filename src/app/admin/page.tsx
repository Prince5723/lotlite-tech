"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { NavContainerDemo } from "@/components/nav-container";
export default function SignupForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) throw new Error("Invalid credentials");

      const { token } = await res.json();
      localStorage.setItem("token", `Bearer ${token}`); // Store token

      router.push("/admin/add-course"); // Redirect on success
    } catch (err: any) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <NavContainerDemo/>
    <div className="flex justify-center items-center min-h-screen bg-black">
      <div className="max-w-md w-full bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold text-center text-neutral-800 dark:text-neutral-200">
          Admin Login
        </h2>

        <form className="mt-6" onSubmit={handleSubmit}>
          <div className="mb-4">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" placeholder="Enter your email" required />
          </div>
          <div className="mb-4">
            <Label htmlFor="password">Password</Label>
            <Input id="password" name="password" type="password" placeholder="Enter your password" required />
          </div>

          <button
            type="submit"
            className="w-full bg-black dark:bg-zinc-800 text-white py-2 rounded-md font-medium transition hover:opacity-80 disabled:opacity-50"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
    </>
  );
}
