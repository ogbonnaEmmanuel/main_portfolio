import React from 'react';
import team from '../img/team.jpg'

const Comm = ()=>{
    return(
        <section id="TeamWork">
            <div id="GridWrapper">
            <img src={team} id="team_image" alt="team_image"/>
            <div id="comm_area">
                <h1 id="comm_head">COMMUNICATION SKILLS AND TEAMWORK</h1>
                <h4 id="comm_text">
                        I find working in a teams as a meduim where i can learn new
                        things especially when am working with a lot of smart
                        ninjas,yeah ninjas i call them because they are disciplined
                        and good at what they do,and when it comes to technical
                        communication between teams or other executives,trust me
                        i do great..
                </h4>
                <button id="btn_download">DOWNLOAD CV</button>
            </div>
        </div>
    </section>
    )
}
export default Comm;