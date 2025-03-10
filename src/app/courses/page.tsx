'use client'
import { useEffect, useState } from "react";
import { NavContainerDemo } from "@/components/nav-container";
import { ThreeDCardDemo } from "@/components/course-card";

// Define Course Type
type Course = {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
  syllabusUrl: string;
};

export default function Home() {
  const [courses, setCourses] = useState<Course[]>([]); // ✅ Initialize as an empty array

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch("/api/courses");
        if (!response.ok) throw new Error("Failed to fetch courses");

        const data = await response.json();
        console.log(data);
        setCourses(data || []); // ✅ Ensure fallback to an empty array
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <>
      <NavContainerDemo />
      <h1 className="text-center text-4xl font-bold py-12 text-white">Courses</h1>
      <div className="container mx-auto ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
        {courses.length > 0 ? (
          courses.map((course) => (
            <div key={course._id} className="">
              <ThreeDCardDemo
                title={course.title}
                description={course.description}
                imageUrl={course.imageUrl}
                syllabusUrl={course.syllabusUrl}
              />
            </div>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500 py-12">
            No courses available
          </p>
        )}
      </div>
    </div>
    </>
  );
}
