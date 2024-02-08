import React from "react";
import "../Contact/Contacts.css";
import { Element } from "react-scroll";
import Footer from "../Footer/Footer";
// import Swal from "sweetalert2";
// import emailjs from '@emailjs/browser';


const Contacts = () => {

  // // Swal.fire({
  // //   title: "Sended!",
  // //   text: "Thank you for your Interest, I'll get back to you soon!",
  // //   icon: "success",
  // // });

  // const [name, setName] = React.useState();
  // const [email, setEmail] = React.useState();
  // // const [subject, setSubject] = React.useState();
  // const [message, setMessage] = React.useState();
  
  // const handleSubmit = () => {

  //   const serviceId = 'service_k0vkk9f';
  //   const templateId = 'template_z9gox9g';
  //   const publicKey = '1WGI8Sc2aG5v6RS4e';

  //   const templateParams = {
  //       from_name: name,
  //       from_email: email,
  //       to_name: 'Loganathan',
  //       // subject: subject,
  //       message: message
  //   };

  //   emailjs.send(serviceId, templateId, templateParams, publicKey)
  //   .then((response) => {
  //     console.log('Email sent successfully', response);
  //     setName('');
  //     setEmail('');
  //     setMessage('');
  //   })
  //   .catch((error) => {
  //     console.log('Error sending email:', error)
  //   })
  // }

  return (
    <Element name="contact">
      <div className="contacts__container">
        <form action="">
          <div className="contacts__header">
            <div className="contacts-title">
              <p>CONTACT</p>
            </div>
            <div className="contacts-subheading">
              <p>I'd Love to Hear From You!</p>
            </div>
          </div>

          <div className="inputGroup__one">
            <input
              className="name-input"
              type="text"
              placeholder="Enter your Name"
              // onChange={(e) => setName(e.target.value)}
            />
            <input
              className="email-input"
              type="text"
              placeholder="Enter your Email"
              // onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="inputGroup__two">
              {/* <input
                className="subject-input"
                type="text"
                placeholder="Enter Subject"
                // value={subject}
                // onChange={(e) => setSubject(e.target.value)}
              /> */}
            <textarea
              className="messege-input"
              cols="30"
              rows="10"
              placeholder="Enter Message"
              // onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>

          <div className="contacts__btn">
            <button type="button">
              Send Message
            </button>
          </div>
        </form>
      </div>

      <Footer />
    </Element>
  );
};


export default Contacts;
