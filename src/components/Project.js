import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Project = () => {
  const projects = [
    {
      title: 'Book Store Project',
      description: 'A web application for browsing and purchasing books.',
      image: 'https://cdn-icons-png.flaticon.com/512/146/146940.png',
      githubLink: 'https://github.com/pavithrapoongavanam03/book-store',
      liveDemoLink: 'https://github.com/pavithrapoongavanam03/book-store',
    },
    {
      title: 'Tasty Trails',
      description: 'An app for discovering and ordering food from restaurants.',
      image: 'https://icon-library.com/images/order-food-online-icon/order-food-online-icon-20.jpg',
      githubLink: 'https://github.com/pavithrapoongavanam03/Tasty-trails',
      liveDemoLink: 'https://tastytrails.netlify.app/',
    },
    {
      title: 'Multifacet AI',
      description: 'Multifacet AI is a versatile AI system similar to a clone of GPT',
      image: 'https://static.thenounproject.com/png/5680345-200.png',
      githubLink: 'https://github.com/pavithrapoongavanam03/chat-gpt-clone-project',
      liveDemoLink: 'https://github.com/pavithrapoongavanam03/chat-gpt-clone-project',
    },
    {
      title: 'Portfolio Project',
      description: 'Personal portfolio website showcasing skills and projects.',
      image: 'https://img.freepik.com/premium-vector/creative-idea-digital-portfolio-online-design-concepts-with-character_269730-321.jpg',
      githubLink: 'https://github.com/pavithrapoongavanam03/portfolio',
      liveDemoLink: 'https://github.com/pavithrapoongavanam03/portfolio',
    },
    {
      title: 'Weather App Project',
      description: 'An app for checking weather forecasts for different locations.',
      image: 'https://store-images.s-microsoft.com/image/apps.60423.13664108468657913.8218191b-9e2a-49f4-8455-3c027b985a5d.30a38556-a2f8-4e20-835b-d8d914491b8b',
      githubLink: 'https://github.com/pavithrapoongavanam03/weather-app',
      liveDemoLink: 'https://weather-applicationjspro.netlify.app/',
    },
    // Add more projects as needed
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '25%',
    prevArrow: <button className="slick-prev">Previous</button>,
    nextArrow: <button className="slick-next">Next</button>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '20%',
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '10%',
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '0%',
        }
      }
    ]
  };

  return (
    <div className="bg-white py-32">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center text-purple-950">My Projects</h2>
        <Slider {...settings}>
          {projects.map((project, index) => (
            <div key={index} className="px-4">
              <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition duration-300 border border-purple-950">
                <img src={project.image} alt={project.title} className="mx-auto mb-4" style={{ width: '200px', height: '200px' }} />
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <p>{project.description}</p>
                <div className="mt-4 flex justify-between">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.liveDemoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-500 hover:underline"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Project;
