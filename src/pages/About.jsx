import React from "react";

function About() {
  return (
    <div className="container mx-auto p-4 text-black">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <p className="mb-4">Founded in 1985, Springdale Public School has been dedicated to providing quality education and holistic development to students.</p>
      <h2 className="text-2xl font-bold mb-2">Vision</h2>
      <p className="mb-4">To create a learning environment that fosters academic excellence, critical thinking, and ethical values.</p>
      <h2 className="text-2xl font-bold mb-2">Mission</h2>
      <p className="mb-4">To empower students with the knowledge, skills, and values needed to thrive in a dynamic world.</p>
      <h2 className="text-2xl font-bold mb-2">Principal's Message</h2>
      <p className="mb-4">At Springdale, we believe in nurturing the potential of every student and guiding them towards a successful future.</p>
      <h2 className="text-2xl font-bold mb-2">Infrastructure and Facilities</h2>
      <ul className="list-disc ml-8">
        <li>State-of-the-art science and computer labs</li>
        <li>Spacious and well-equipped classrooms</li>
        <li>Library with a vast collection of books and digital resources</li>
        <li>Sports facilities including a playground, gymnasium, and swimming pool</li>
      </ul>
    </div>
  );
}

export default About;
