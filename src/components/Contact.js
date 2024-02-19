import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import image1 from "../assets/images/laptopreading.png";

const Contact = () => {
  const form = useRef(null);

  const contact_info = [
    { logo: "mail", text: "Pavithra Poongavanam", link: "mailto:pavithrapoongavanam2203@gmail.com" },
    { logo: "logo-whatsapp", text: "+91 8939299453", link: "https://wa.me/918939299453" },
    {
      logo: "location",
      text: "Chennai, India",
      link: "https://maps.app.goo.gl/ZvnptxhqNiwLM2Zx8"
    },
  ];

  function sendEmail(e) {
    e.preventDefault(); // Prevent default form submission behavior

    emailjs.sendForm('gmail', 'template_h5pc4f9', form.current, 'hqp0lIq95BzyjS-0B')
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          toast.success('Your message has been sent successfully!');
        },
        (error) => {
          console.log('FAILED...', error);
          toast.error('Oops! Something went wrong. Please try again later.');
        }
      );
    e.target.reset(); // Reset the form fields after submission
  };

  return (
    <section id="contact" className="py-32 px-3 text-purple-950">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-bold">Contact Me</h3>
        <div className="mt-16 flex flex-col md:flex-row gap-6 max-w-5xl bg-gradient-to-br from-white to-gray-200 border-2 border-black md:p-6 p-2 rounded-lg mx-auto">
          <form onSubmit={sendEmail} ref={form} className="flex flex-col flex-1 gap-5">
            <input type="text" placeholder="Your Subject" name="subject" className="border border-purple-950 rounded-md px-3 py-2" />
            <input type="text" placeholder="Your Name" name="name" className="border border-purple-950 rounded-md px-3 py-2" />
            <input type="email" placeholder="Your Email Address" name="email" className="border border-purple-950 rounded-md px-3 py-2" />
            <textarea placeholder="Your Message" rows={10} name="message" className="border border-purple-950 rounded-md px-3 py-2"></textarea>
            <button type="submit" className="bg-purple-950 hover:bg-purple-800 cursor-pointer transform hover:scale-110 transition-transform duration-300 text-white rounded-lg px-6 py-2">Send Message</button>
          </form>
          <div className="flex flex-col justify-center">
            <img src={image1} alt="Contact" className="md:w-96 mx-auto" />
          </div>
          <div className="flex flex-col gap-7">
            {contact_info.map((contact, i) => (
              <div key={i} className="flex flex-row items-center gap-4">
                <a href={contact.link} target="_blank" rel="noopener noreferrer">
                  <div className="w-12 h-12 flex items-center justify-center text-white bg-purple-950  hover:bg-purple-800 rounded-full cursor-pointer transform hover:scale-110 transition-transform duration-300">
                    <ion-icon name={contact.logo}></ion-icon>
                  </div>
                </a>
                <a href={contact.link} target="_blank" rel="noopener noreferrer" className="text-purple-950">{contact.text}</a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Contact;
