import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="container mx-auto p-4 text-black">
      <form onSubmit={handleSubmit} className="bg-white p-4 shadow-xl rounded-md w-1/2 mx-auto my-10">
        <h2 className="text-xl font-bold mb-2">Send Us a Message</h2>
        <div className="mb-4">
          <label htmlFor="name" className="block font-bold mb-1">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border p-2 rounded-md bg-white"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block font-bold mb-1">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border p-2 rounded-md bg-white"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block font-bold mb-1">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full border p-2 rounded-md bg-white"
            required
          />
        </div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md">Submit</button>
      </form>
      <h1 className="font-bold text-zinc-600">School Location : </h1>
      <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.732268787683!2d-122.08424968469285!3d37.422065979824946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb5e69c528d6f%3A0xa79f49e4d0e0da28!2sGoogleplex!5e0!3m2!1sen!2sus!4v1614121617885!5m2!1sen!2sus"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              style={{ border: 0 }}
              aria-hidden="false"
              tabIndex="0"
              title="School Location"
        ></iframe>
    </div>
  );
}

export default Contact;
