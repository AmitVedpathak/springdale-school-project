import React from "react";

function Academics() {
  return (
    <div className="container mx-auto p-4 text-black">
      <h1 className="text-3xl font-bold mb-4">Academics</h1>
      <h2 className="text-2xl font-bold mb-2">Curriculum</h2>
      <div className="mb-4">
        <h3 className="text-xl font-bold mb-2">Primary (Grades 1-5)</h3>
        <ul className="list-disc ml-8">
          <li>English</li>
          <li>Mathematics</li>
          <li>Science</li>
          <li>Social Studies</li>
          <li>Art</li>
          <li>Physical Education</li>
        </ul>
      </div>
      <div className="mb-4">
        <h3 className="text-xl font-bold mb-2">Secondary (Grades 6-10)</h3>
        <ul className="list-disc ml-8">
          <li>English</li>
          <li>Mathematics</li>
          <li>Science (Physics, Chemistry, Biology)</li>
          <li>Social Studies</li>
          <li>Computer Science</li>
          <li>Physical Education</li>
          <li>Art</li>
        </ul>
      </div>
      <div className="mb-4">
        <h3 className="text-xl font-bold mb-2">Senior Secondary (Grades 11-12)</h3>
        <h4 className="font-bold">Science Stream</h4>
        <ul className="list-disc ml-8">
          <li>Physics</li>
          <li>Chemistry</li>
          <li>Biology</li>
          <li>Mathematics</li>
          <li>Computer Science</li>
          <li>English</li>
        </ul>
        <h4 className="font-bold">Commerce Stream</h4>
        <ul className="list-disc ml-8">
          <li>Accountancy</li>
          <li>Business Studies</li>
          <li>Economics</li>
          <li>Mathematics</li>
          <li>English</li>
        </ul>
      </div>
      <h2 className="text-2xl font-bold mb-2">Teaching Methodologies</h2>
      <p className="mb-4">We use a blend of traditional and modern teaching techniques to cater to different learning styles.</p>
      <h2 className="text-2xl font-bold mb-2">Educational Resources</h2>
      <p className="mb-4">Digital classrooms, interactive learning modules, and access to online educational platforms.</p>
    </div>
  );
}

export default Academics;
