import React from "react";

function Students() {
  return (
    <div className="container mx-auto p-4 text-black">
      <h1 className="text-3xl font-bold mb-4">Students</h1>
      <h2 className="text-2xl font-bold mb-2">Life at Springdale</h2>
      <p className="mb-4">Springdale Public School offers a vibrant student life with a range of extracurricular activities and clubs.</p>
      <h3 className="text-xl font-bold mb-2">Extracurricular Activities</h3>
      <ul className="list-disc ml-8">
        <li>Music</li>
        <li>Dance</li>
        <li>Drama</li>
        <li>Art</li>
        <li>Sports</li>
        <li>Robotics</li>
        <li>Debate Club</li>
        <li>Science Club</li>
      </ul>
      <h3 className="text-xl font-bold mb-2">Clubs and Societies</h3>
      <ul className="list-disc ml-8">
        <li>Literary Society</li>
        <li>Environmental Club</li>
        <li>Astronomy Club</li>
        <li>Coding Club</li>
      </ul>
      <h2 className="text-2xl font-bold mb-2">Achievements</h2>
      <ul className="list-disc ml-8">
        <li>John Smith - National Level Math Olympiad Winner</li>
        <li>Sarah Lee - Gold Medalist in State Swimming Championship</li>
        <li>Tech Innovators Club - Winners of Inter-School Robotics Competition</li>
      </ul>
      <h2 className="text-2xl font-bold mb-2">Student Council</h2>
      <ul className="list-disc ml-8">
        <li>President: Amy Parker, Grade 12</li>
        <li>Vice President: Rajiv Mehta, Grade 11</li>
        <li>Secretary: Lisa Wong, Grade 10</li>
      </ul>
    </div>
  );
}

export default Students;
