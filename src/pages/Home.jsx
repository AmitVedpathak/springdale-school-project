import React from "react";
import Carousel from "../components/Carousel";

function Home() {
  return (
    <>
      <div className="container mx-auto p-4 text-black pt-10 text-center">
        <h1 className="text-3xl font-bold mb-4 text-pink-500">
          Welcome to Springdale Public School
        </h1>
        <p className="mb-8">
          Welcome to Springdale Public School, where we nurture young minds for
          a brighter future.
        </p>
          <Carousel />
      </div>
    </>
  );
}

export default Home;
