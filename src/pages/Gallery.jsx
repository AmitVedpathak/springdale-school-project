import React from "react";

function Gallery() {
  const photos = [
    {
      src: "/images/sports_day.jpg?url",
      alt: "Sports Day",
      description: "Students participating in various sports events.",
    },
    {
      src: "/images/science_exhibition.jpg?url",
      alt: "Science Exhibition",
      description: "Students presenting their science projects.",
    },
    {
      src: "/images/cultural_fest.jpg?url",
      alt: "Cultural Fest",
      description: "Students performing in the cultural fest.",
    },
    {
      src: "/images/classroom.jpg?url",
      alt: "Classroom",
      description: "A glimpse of our interactive classrooms.",
    },
    {
      src: "/images/library.jpg?url",
      alt: "Library",
      description: "Students reading and studying in the school library.",
    },
  ];

  const videos = [
    {
      src: "/path/to/school_tour.mp4",
      description: "Virtual tour of Springdale Public School.",
    },
    {
      src: "/path/to/annual_function.mp4",
      description: "Highlights from the Annual Function 2023.",
    },
  ];

  return (
    <div className="container mx-auto p-4 text-black">
      <h1 className="text-3xl font-bold mb-4">Gallery</h1>
      <h2 className="text-2xl font-bold mb-2">Photos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {photos.map((photo, index) => (
          <div key={index} className="bg-white p-4 shadow-md rounded-md">
            <img src={photo.src} alt={photo.alt} className="w-full h-48 object-fill mb-2" />
            <p>{photo.description}</p>
          </div>
        ))}
      </div>
      <h2 className="text-2xl font-bold mb-2">Videos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {videos.map((video, index) => (
          <div key={index} className="bg-white p-4 shadow-md rounded-md">
            <video controls className="w-full h-48 mb-2">
              <source src={video.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p>{video.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
