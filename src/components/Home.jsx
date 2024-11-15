import React from 'react';
import HeroImage from '../assets/heroImage.jpg';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div
      name="home"
      className="w-full h-screen bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="flex flex-col items-center justify-center h-full max-w-screen-lg px-4 mx-auto md:flex-row">
        {/* Text Section */}
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl font-bold text-white sm:text-7xl">
            I'm a Frontend Developer
          </h2>
          <p className="py-4 text-gray-500 max-w-lg">
            As a beginner frontend developer, I have a strong foundation in
            building and designing user interfaces. I have experience working
            with HTML, CSS, JavaScript, React, and Tailwind CSS to create
            responsive and visually appealing web applications. Additionally, I
            have knowledge of Node.js, Express.js, and MySQL. I am passionate
            about learning and improving my skills in frontend development,
            striving to craft user-friendly and interactive digital experiences.
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="flex items-center px-6 py-3 my-2 text-white rounded-md cursor-pointer group w-fit bg-gradient-to-r from-cyan-500 to-blue-500"
            >
              Portfolio
              <span className="duration-300 group-hover:rotate-90">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div>
          <img
            src={HeroImage}
            alt="Profile"
            className="mx-auto rounded-2xl w-64 h-64 md:w-96 md:h-96"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
