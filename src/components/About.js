import React from "react";
import Profile from "../assets/images/profile.jpg";
import pdf from "../assets/images/Pavithra .pdf";

const About = () => {
  return (
    <section id="about" className="py-10 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl  text-purple-950 font-bold">About Me</h3>
        <div className="flex flex-col md:flex-row items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="md:flex-1 p-2">
            <div className="text-black my-3">
              <p className="text-justify leading-7 w-full md:w-11/12 mx-auto">
                Greetings! I'm Pavithra Poongavanam, a dedicated full-stack developer driven by a passion for building robust,
                user-centric web applications. With a keen eye for detail and a knack for problem-solving, I thrive in dynamic
                environments where I can leverage my expertise to deliver innovative solutions that exceed expectations.
              </p>
              <section id="education" className="py-10 px-3 text-gray-800">
                <div className="container mx-auto">
                  <h2 className="text-3xl font-semibold text-center mb-8">Education</h2>
                  <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <li className="bg-white shadow-lg rounded-lg p-6">
                      <h3 className="text-lg font-semibold mb-2">B.Tech Information Technology</h3>
                      <p className="text-sm text-gray-600">R.M.K Engineering College</p>
                      <p className="text-sm text-gray-600">CGPA: 8.56</p>
                    </li>
                    <li className="bg-white shadow-lg rounded-lg p-6">
                      <h3 className="text-lg font-semibold mb-2">HSC</h3>
                      <p className="text-sm text-gray-600">M.G.R Adarsh School</p>
                      <p className="text-sm text-gray-600">Percentage: 92.5%</p>
                    </li>
                    <li className="bg-white shadow-lg rounded-lg p-6">
                      <h3 className="text-lg font-semibold mb-2">SSLC</h3>
                      <p className="text-sm text-gray-600">M.G.R Adarsh School</p>
                      <p className="text-sm text-gray-600">Percentage: 91.2%</p>
                    </li>
                  </ul>
                </div>
              </section>
             
              <a href={pdf} download>
              <button className="bg-purple-900 text-semibold text-white hover:bg-purple-800 hover:text-white hover:scale-105 transition duration-300">Download CV</button>

              </a>
            </div>
          </div>
          <div className="md:flex-1 md:mt-0 mt-6 flex justify-center items-center">
            <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg">
              <img
                src={Profile}
                alt=""
                className="w-full object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
