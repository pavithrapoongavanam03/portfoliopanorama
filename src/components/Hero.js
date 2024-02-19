import React from "react";
import image from "../assets/images/image.png";

const Hero = () => {
  const socialMediaLinks = {
    instagram: "https://www.instagram.com/____pavithraa_____?igsh=MWkwMmR3ZHBkYWltMg==",
    facebook: "https://www.facebook.com/pavithra.poongavanam03/",
    linkedin: "https://www.linkedin.com/in/pavithra-poongavanam-5868b0253/",
    twitter: "https://twitter.com/Pavithrapavi03",
    github: "https://github.com/pavithrapoongavanam03",
    whatsapp: "http://wa.me/918939299453",
  };

  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center"
    >
      <div className="flex-1 flex items-center justify-center h-full">
        <img src={image} alt="" className="md:w-11/12 h-full object-cover" />
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-purple-900 font-bold">
            Hello!
          </h1>
          <h2 className="md:text-justify text-xl md:left-0   leading-6 text-purple-800  font-bold">
            I'm Pavithra Poongavanam
            <h4 className="md:text-left text-sm leading-1 text-black mr-6">
              "Versatile full-stack developer with expertise in front-end and back-end technologies. Crafting seamless user interfaces and implementing robust server-side logic for end-to-end solutions is my forte, driven by a passion for creating efficient web applications."
            </h4>{" "}
          </h2>

          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            {Object.entries(socialMediaLinks).map(([platform, url]) => (
              <a
                key={platform}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-black cursor-pointer transform hover:scale-110 transition-transform duration-300"
              >
                <ion-icon name={`logo-${platform}`} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
