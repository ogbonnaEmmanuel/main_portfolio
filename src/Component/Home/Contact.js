import React from 'react';

class Contact extends React.Component{
    render(){
        return(
        <footer>
            <div className="Mainwrapper">
                <div className="ElementWrapper">
                    <h1 id="footer_head">CONTACT ME</h1>
                    <textarea id="input_message" placeholder="MESSAGE">
                        
                    </textarea>
                    <button id="send_message">SEND MESSAGE</button>
                </div>
            </div>
    </footer>
        )
    }
}
export default Contact;