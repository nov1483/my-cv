import React, {useState} from "react";
import {ImMail} from "react-icons/im";
import {BsLinkedin} from "react-icons/bs";
import {BsTelegram} from "react-icons/bs";
import {BsGithub} from "react-icons/bs";
import {ImMail4} from "react-icons/im";
import {BsPhoneVibrateFill} from "react-icons/bs";
import "./css/contacts.css";



const random = ["Ouch!" , "Stop hit me!", "Miss!", "Why?", "Please, stop!", "Again?", "=(", "It's hurt", "Haha, funny"];

const getRandomWords = () => {
        return random[Math.floor(Math.random() * random.length)];
};

function Contacts() {
  
    const [text, setText] = useState(getRandomWords());
    
    const handleClick = () => {
        const getRandomText = getRandomWords();
        setText(getRandomText); 
        
     
      };
    
      setTimeout(() => {
            handleClick()
        }, 4500);
       
      console.log(text)
    
      
    
    return(
        <section className="contacts">
            <div className="container contacts_container">
                <h2>You can reach me any time.</h2>
                <div className="contacts_content">
                    
                    <div className="contacts_img">

                    </div>
                    <div className="contacts_info">
                        
                        <div className="social_tree_container">
                            <a href="mailto:novickii8314@gmail.com?subject=Job" className="contacts_ico contacts_ico_gmail"><ImMail/></a>
                            <a href="https://www.linkedin.com/in/anton-nowicki/" target="_blank" rel="noreferrer" className="contacts_ico contacts_ico_linkedin"><BsLinkedin/></a>
                            <a href="https://github.com/nov1483" target="_blank" rel="noreferrer" className="contacts_ico contacts_ico_github"><BsGithub/></a>
                            <a href="https://t.me/AntoniNowicki" target="_blank" rel="noreferrer" className="contacts_ico contacts_ico_telegram"><BsTelegram/><span>{text}</span></a>
                            
                        </div>

                        <div className="contacts_info_content">
                            <p><ImMail4/> E-mail: novickii8314@gmail.com  </p>
                            <p><BsPhoneVibrateFill/> Phone: +48 795 710 648  </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contacts;