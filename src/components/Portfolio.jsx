import React from "react";

import JobPortal from "../assets/portfolio/job portal.jpg";
import ECommerce from "../assets/portfolio/E-commerce.jpeg";
import Hotel from "../assets/portfolio/Hotel.jpg";
import Consultancy from "../assets/portfolio/Consultancy.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      title: "Consultancy Website (Frontend)",
      src: Consultancy,
      linkDemo: "https://felix-consultancy-01.vercel.app/",
      linkCode: "https://github.com/God-yash12/consultancy_felix",
    },
    {
      id: 2,
      title: "Mobile Sales E-commerce (Frontend)",
      src: ECommerce,
      linkDemo: "",
      linkCode: "https://github.com/God-yash12/mobile_sales_e-commerce",
    },
    {
      id: 3,
      title: "Hotel Website (Frontend)",
      src: Hotel,
      linkDemo: "http://kusumhotel.vercel.app",
      linkCode: "https://github.com/God-yash12/kusum_hotel",
    },
    {
      id: 4,
      title: "Job Portal (backend/expressJS)",
      src: JobPortal,
      linkDemo: "",
      linkCode: "https://github.com/God-yash12/my_project_1",
    },
    {
      id: 5,
      title: "E-commerce (Frontend)",
      src: ECommerce,
      linkDemo: "",
      linkCode: "https://github.com/God-yash12/E-commerce-",
    },
  ];

  return (
    <div
      name="portfolio"
      className="min-h-screen text-white bg-gradient-to-b from-black to-gray-800 sm:h-fit md:min-h-screen"
    >
      <div className="container mx-auto p-4">
        {/* Header */}
        <div className="flex flex-col justify-start max-w-screen-lg mx-auto">
          <p className="text-4xl font-bold inline">Portfolio</p>
          <span className="inline-block w-36 h-1 mt-1 bg-gray-500"></span>
          <p className="py-3 pb-10 text-left">Check out some of my work right here</p>
        </div>

        {/* Portfolio Grid */}
        <div className="flex flex-col items-center justify-center h-full pb-4 mx-auto">
          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 sm:px-0">
            {portfolios.map(({ id, title, src, linkDemo, linkCode }) => (
              <div
                key={id}
                className="w-[350px] md:w-[350px] rounded-lg shadow-md shadow-gray-600"
              >
                {/* Portfolio Image */}
                <img
                  src={src}
                  alt={title}
                  className="h-[200px] w-full rounded-t-lg object-cover duration-200 hover:scale-105"
                />
                <h3 className="mt-4 text-lg font-semibold text-center">
                  {title}
                </h3>
                {/* Links */}
                <div className="flex items-center justify-center mt-4">
                  {linkDemo ? (
                    <a
                      href={linkDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="w-1/2 px-6 py-2 m-2 duration-200 hover:scale-105">
                        Demo
                      </button>
                    </a>
                  ) : (
                    <button
                      className="w-1/2 px-6 py-2 m-2 cursor-not-allowed"
                      disabled
                    >
                      Demo Not Available
                    </button>
                  )}
                  {linkCode ? (
                    <a
                      href={linkCode}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="w-1/2 px-6 py-2 m-2 duration-200 hover:scale-105">
                        Code
                      </button>
                    </a>
                  ) : (
                    <button
                      className="w-1/2 px-6 py-2 m-2 bg-gray-500 cursor-not-allowed"
                      disabled
                    >
                      Code Not Available
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
