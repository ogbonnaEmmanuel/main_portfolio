import React from 'react';
import DotImage from '../img/Dots.png'
import CorrectIcon from '../img/correct.png'
import UserImage from '../img/IMG_0061.jpg'
import Navbar from './Navbar';

const MainHeader = ()=>{
    return (
        <div>
<header>
    <div className="wrapper">
        <h3 id="my_name">OGBONNA EMMANUEL JUSTIN</h3>
        <img id="dot_image" src={DotImage} alt="dot_image"/>
        <div id="full_stack">
            <h4 id="full_id">FULL STACK WEB DEVELOPER</h4>
            <img id="cor_img" src={CorrectIcon} alt="correct_icon"/>
        </div>
        <div id="description">
            <p id="head_des">
                I'm a creative thinker, problem solver and developer, interested in high level
                programming language, machine learning, but I always code for fun, so I made various 
                projects on various platforms as well As using diffrent programming language to build mobile app, 
                and web applications... 
            </p>
            <img id="head_img" src={UserImage} alt="user_image"/>
        </div>
        <Navbar/>
        </div>
</header>
</div>
    )
}
export default MainHeader;

