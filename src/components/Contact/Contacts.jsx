import React, { useState } from "react";
import "../Contact/Contacts.css";
import { Element } from "react-scroll";
import Footer from "../Footer/Footer";
import Swal from "sweetalert2";
import axios from "axios";

const Contacts = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessege] = useState("");

  const sendMail = () => {
    if (name && email && subject && message) {
      axios
        .post("http://localhost:5000/send_email", {
          name,
          email,
          subject,
          message,
        })
        .then(() =>
          Swal.fire({
            title: "Sended!",
            text: "Thank you for your Interest, I'll get back to you soon!",
            icon: "success",
          })
        )
      return;
    }
    return alert("Fill in all the fields to continue");
  };

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
              name=""
              id=""
              placeholder="Enter your Name"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="email-input"
              type="text"
              name=""
              id=""
              placeholder="Enter your Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="inputGroup__two">
            <input
              className="subject-input"
              type="text"
              name=""
              id=""
              placeholder="Enter Subject"
              onChange={(e) => setSubject(e.target.value)}
            />
            <textarea
              className="messege-input"
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Enter Messege"
              onChange={(e) => setMessege(e.target.value)}
            ></textarea>
          </div>

          <div className="contacts__btn">
            <button onClick={() => sendMail()} type="button">
              Send Messege
            </button>
          </div>
        </form>
      </div>

      <Footer />
    </Element>
  );
};

export default Contacts;
