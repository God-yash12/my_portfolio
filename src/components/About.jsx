import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen text-white bg-gradient-to-b from-gray-800 to-black"
    >
      <div className="flex flex-col justify-center w-full h-full max-w-screen-lg p-4 pb-8 mx-auto">
        <div className="pb-6">
          <p className="inline text-4xl font-bold border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="mt-20 text-xl">
          I am a passionate and dedicated web developer with a
          strong foundation in front-end and back-end technologies. With
          expertise in HTML, CSS, Tailwind CSS, JavaScript, and React, I
          specialize in creating visually appealing and responsive user
          interfaces. On the server side, I have hands-on experience with
          Node.js, Express.js, and MySQL, enabling me to build robust and
          efficient web applications. Driven by curiosity and a love for
          problem-solving, I constantly explore innovative solutions to deliver
          high-quality digital experiences. Whether it's developing sleek
          designs or implementing powerful functionality, I am committed to
          bringing ideas to life with precision and creativity.
        </p>
        <br />
        
      </div>
    </div>
  );
};

export default About;
