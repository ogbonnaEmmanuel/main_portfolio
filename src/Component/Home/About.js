import React from 'react';
import aboutImage from '../img/about.png';

const About = ()=>{
    return(
        <section id="About_Me">
            <div className="Mainwrapper">
                <div className="ElementWrapper">
                <img src={aboutImage} id="aboutImage" alt="image_about"/>
                <h1 id="about_head">ABOUT ME </h1>
                <h3 id="about_text">If there is anything you need to understand about me is that i have a keen eye for details
                    and i love anything new because they are challenging,but lets take a break is everything
                    new challenging,well to my view it depends on who is on it....
                </h3>
            </div>
        </div>
    </section>
    )
}
export default About;