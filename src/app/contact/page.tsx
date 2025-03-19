"use client";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phoneNo: "",
    email: "",
    subject: "",
    message: "",
  });

  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, phoneNo, email, subject, message } = formData;
  
    // Simple validation
    if (!name || !phoneNo || !email || !subject || !message) {
      setError("All fields are required!");
      setSuccess(null);
      return;
    }
  
    try {
      // Make POST request to the backend API
      const response = await fetch("/api/query", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), // Send form data in the request body
      });
  
      if (!response.ok) {
        throw new Error("Failed to submit form");
      }
  
      const result = await response.json();
  
      // Show success message
      setSuccess("Your message has been sent successfully!");
      setError(null);
  
      // Reset form after successful submission
      setFormData({
        name: "",
        phoneNo: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error: any) {
      console.error(error);
      setError(error.message || "An error occurred while submitting the form.");
      setSuccess(null);
    }
  };
  

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="max-w-md w-full p-4 md:p-8 shadow-input bg-white dark:bg-black rounded-xl">
        <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200 text-center">
          Contact Us
        </h2>

        <form className="my-8" onSubmit={handleSubmit}>
          {error && (
            <div className="text-red-500 text-sm mb-4">{error}</div>
          )}
          
          {success && (
            <div className="text-green-500 text-sm mb-4">{success}</div>
          )}

          <div className="mb-4">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              name="name"
              placeholder="Your full name"
              type="text"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <Label htmlFor="phoneNo">Phone Number</Label>
            <Input
              id="phoneNo"
              name="phoneNo"
              placeholder="Your phone number"
              type="tel"
              value={formData.phoneNo}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              name="email"
              placeholder="your.email@example.com"
              type="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <Label htmlFor="subject">Subject</Label>
            <Input
              id="subject"
              name="subject"
              placeholder="Subject of your message"
              type="text"
              value={formData.subject}
              onChange={handleChange}
            />
          </div>

          <div className="mb-8">
            <Label htmlFor="message">Message</Label>
            <Input
              id="message"
              name="message"
              placeholder="Your message here..."
              type="text"
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}