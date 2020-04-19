import React from 'react';
import left_arrow from '../img/Left_arrow.png';
import right_arrow from '../img/Right_arrow.png';

class ProjectSummary extends React.Component{
    render(){
        return(

            <div className="MainContainer">
                    <div className="project_head">
                        <img src={left_arrow} className="left_arrow" alt="left_arrow"/>
                        <p className="head_text">SAVINGS APPLICATION</p>
                        <img src={right_arrow} className="right_arrow" alt="right_arrow"/>
                    </div>

                    <div className="project_body">
                        <p className="body_text">
                            with the help of react and laravel, i was able to complete a full
                            savings application,that enables users to save automatically from
                            their bank accounts,the application provides different means of
                            savings,such as collaborative savings...
                        </p>
                    </div>

                    <div className="project_footer">
                        <div className="project_head">
                            <img src={left_arrow} className="left_arrow" alt="left_arrow"/>
                            <p className="head_text">LANGUAGES USED</p>
                            <img src={right_arrow} className="right_arrow" alt="right_arrow"/>
                        </div>
                        <div className="footer_body">
                                
                            <div className="languages">
                                <button className="btn_lan">HTML</button>
                                <button className="btn_lan">CSS</button>
                                <button className="btn_lan">JAVASCRIPT</button>
                                <button className="btn_lan">PHP</button>
                            </div>

                            <div className="frame_works">
                                <p  className="frame_text">FRAMEWORKS USED</p>
                                <div className="languages">
                                    <button className="btn_lan">LARAVEL</button>
                                    <button className="btn_lan">REACT</button>
                                </div>
                            </div>
                            <div className="view_github">
                                <button className="btn_git">VIEW ON GITHUB</button>
                            </div>

                        </div>
                    </div>
                </div>
        )
    }
}
export default ProjectSummary;