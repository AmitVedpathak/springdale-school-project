import React from "react";

function Faculty() {
  const facultyMembers = [
    {
      name: "John Doe",
      title: "Principal",
      qualification: "M.Ed",
      experience: "20 years of experience in educational administration",
    },
    {
      name: "Jane Smith",
      title: "Vice Principal",
      qualification: "M.Sc. in Physics",
      experience: "15 years of teaching experience",
    },
    {
      name: "Emily Johnson",
      title: "English Teacher",
      qualification: "M.A. in English",
      experience: "10 years of teaching experience",
    },
    {
      name: "Michael Brown",
      title: "Mathematics Teacher",
      qualification: "M.Sc. in Mathematics",
      experience: "8 years of teaching experience",
    },
    {
      name: "Sophia Davis",
      title: "Science Teacher",
      qualification: "M.Sc. in Chemistry",
      experience: "12 years of teaching experience",
    },
    {
      name: "David Wilson",
      title: "Computer Science Teacher",
      qualification: "B.Tech in Computer Science",
      experience: "5 years of teaching experience",
    },
  ];

  return (
    <div className="container mx-auto p-4 text-black">
      <h1 className="text-3xl font-bold mb-4">Faculty</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {facultyMembers.map((member, index) => (
          <div key={index} className="bg-white p-4 shadow-md rounded-md">
            <h2 className="text-xl font-bold">{member.name}</h2>
            <p className="text-gray-700">{member.title}</p>
            <p>{member.qualification}</p>
            <p>{member.experience}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faculty;
