import React from 'react';
import About from './About';
import Comm from './Comm';
import Hubbies from './Hubbies';
import Contact from './Contact';

const home = ()=>{
    return(
        <div>
            <About/>
            <Comm/>
            <Hubbies/>
            <Contact/>
        </div>
    )
}
export default home;