import React from "react";
import ViewCourses from "./Course";

export default function Courses() {
  let Courses = [
    {
      name: "React",
      desc: "SPA",
      id: "0",
    },
    {
      name: "HTML",
      desc: "HyperText markup language",
      id: 1,
    },
    {
      name: "CSS",
      desc: "Cascading style sheet",
      id: 2,
    },
  ];
  return (
    <>
      <h1>ViewCourses</h1>
      {Courses.map((Course) => (
        <ViewCourses Course={Course} key={Course.id} />
      ))}
    </>
  );
}
