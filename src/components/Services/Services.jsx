import React from 'react'
import "../Services/Services.css"
import { Element } from 'react-scroll';
import Ui from "../../assets/layers.png"
import WebIcon from "../../assets/coding.png"
import ResponsiveIcon from "../../assets/responsive.png"


const Services = () => {
  return (
    <Element name="services">

        <div className="services__container">

            <div className="services__header">
                <div className="services-title">
                    <p>SERVICES</p>
                </div>
                <div className="services-sub-heading">
                    <p>What Can I Do for You?</p>
                </div>
                <div className="services-sub-description">
                    <p>Bringing visions to life with precision in web development and design excellence.</p>
                </div>
            </div>

           <div className="services__contentbody">

                    {/* Box 1 starts */}
                <div className="box box__one">
                    <div className="services__icon">
                        <img className="uiIcon" src={Ui} alt="" />
                    </div>
                    <div className="services__heading">
                        <p>UI Design</p>
                    </div>
                    <div className="services__description">
                        <p>Transforming visions into visually stunning realities, our UI design services elevate user experiences to new heights. With a keen focus on functionality, and user engagement, we craft interfaces that seamlessly blend creativity with usability.</p>
                    </div>
                </div>
                    {/* Box 1 ends */}


                    {/* Box 2 starts */}
                <div className="box box__one">
                <div className="services__icon">
                        <img className="WebIcon" src={WebIcon} alt="" />
                    </div>
                    <div className="services__heading">
                        <p>Web Development</p>
                    </div>
                    <div className="services__description">
                        <p>Crafting dynamic and responsive websites tailored to your unique vision. From concept to code. Specializing in creating efficient, user-centric websites that leave a lasting impression. Let's bring your digital presence to life.</p>
                    </div>
                </div>
                    {/* Box 2 ends */}


                    {/* Box 3 starts */}
                <div className="box box__one">
                <div className="services__icon">
                        <img className="responsive-icon" src={ResponsiveIcon} alt="" />
                    </div>
                    <div className="services__heading">
                        <p>Responsive Design</p>
                    </div>
                    <div className="services__description">
                        <p>Elevate your online presence with designs that seamlessly adapt to every screen size. I specialize in creating user-friendly interfaces, ensuring your website delivers an optimal experience on desktops, tablets, and mobile devices.</p>
                    </div>
                </div>
                    {/* Box 3 ends */}




           </div>


        </div>

    </Element>
  )
}

export default Services;