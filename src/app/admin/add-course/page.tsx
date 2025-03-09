"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export default function AddCourseForm() {
  const [courseData, setCourseData] = useState({
    title: "",
    description: "",
    imageUrl: "",
    syllabusUrl: "",
  });

  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) router.push("/admin"); // Redirect if no token
  }, []);

  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCourseData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { title, description, imageUrl, syllabusUrl } = courseData;
  
    // Simple validation
    if (!title || !description || !imageUrl || !syllabusUrl) {
      setError("All fields are required!");
      return;
    }
  
    // Get token from localStorage
    const token = localStorage.getItem("token");
  
    if (!token) {
      setError("You must be logged in.");
      return;
    }
  
    try {
      // Make POST request to the backend API
      const response = await fetch("/api/courses", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token, // Include token in the Authorization header
        },
        body: JSON.stringify(courseData), // Send form data in the request body
      });

      console.log(response);
  
      if (!response.ok) {
        throw new Error("Failed to add course");
      }
  
      const result = await response.json(); // Assuming the server returns JSON
  
      // Show response as an alert
      alert(`Course added successfully: ${result.message || "Success"}`);
  
      // Reset form after successful submission
      setCourseData({
        title: "",
        description: "",
        imageUrl: "",
        syllabusUrl: "",
      });
      setError(null);
    } catch (error: any) {
      console.error(error);
      setError(error.message || "An error occurred while adding the course.");
    }
  };
  

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="max-w-md w-full p-4 md:p-8 shadow-input bg-white dark:bg-black rounded-xl">
        <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200 text-center">
          Add a New Course
        </h2>

        <form className="my-8" onSubmit={handleSubmit}>
          {error && (
            <div className="text-red-500 text-sm mb-4">{error}</div>
          )}

          <div className="mb-4">
            <Label htmlFor="title">Course Title</Label>
            <Input
              id="title"
              name="title"
              placeholder="Course title"
              type="text"
              value={courseData.title}
              onChange={handleChange}
            />
          </div>

          <div className=" mb-4">
            <Label htmlFor="description">Description</Label>
            <Input
              id="description"
              name="description"
              placeholder="Course description"
              type="text"
              value={courseData.description}
              onChange={handleChange}
            />
          </div>

          <div className=" mb-4">
            <Label htmlFor="imageUrl">Course Image URL</Label>
            <Input
              id="imageUrl"
              name="imageUrl"
              placeholder="https://example.com/course-image.jpg"
              type="url"
              value={courseData.imageUrl}
              onChange={handleChange}
            />
          </div>

          <div className=" mb-8">
            <Label htmlFor="syllabusUrl">Syllabus URL</Label>
            <Input
              id="syllabusUrl"
              name="syllabusUrl"
              placeholder="https://example.com/syllabus.pdf"
              type="url"
              value={courseData.syllabusUrl}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          >
            Add Course
          </button>
        </form>
      </div>
    </div>
  );
}
