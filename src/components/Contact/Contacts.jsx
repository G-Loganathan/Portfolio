import React from 'react';
import "../Contact/Contacts.css"
import { Element } from 'react-scroll';
import Footer from '../Footer/Footer';
import Swal from 'sweetalert2';


const Contacts = () => {

  const onSubmit = () => {
    Swal.fire({
      title: "Sended!",
      text: "Thank you for your Interest, I'll get back to you soon!",
      icon: "success"
    });
}


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
                <input className="name-input" type="text" name="" id="" placeholder="Enter your Name"/>
                <input className="email-input" type="text" name="" id="" placeholder="Enter your Email"/>
            </div>

            <div className="inputGroup__two">
              <input className="subject-input" type="text" name="" id="" placeholder="Enter Subject"/>
              <textarea className="messege-input" name="" id="" cols="30" rows="10" placeholder="Enter Messege"></textarea>
            </div>

            <div className="contacts__btn">
              <button onClick={() => onSubmit()} type="button">Send Messege</button>
            </div>

          </form>

        </div>

        <Footer />

    </Element>
  )
}

export default Contacts;