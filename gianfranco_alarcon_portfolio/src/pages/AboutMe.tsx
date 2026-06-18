import MainMenuLoop from "../assets/MainMenuLoop.mp4"
import MeleeParagraph from "../components/MeleeParagraph/MeleeParagraph"

import "../components/MeleeHeader/MeleeHeader.css";
import "../components/MeleeSelectText/MeleeSelectText.css";
import "../components/InfoBox/InfoBox.css"
import "../components/MeleeCaption/MeleeCaption.css"
import "../components/MeleeParagraph/MeleeParagraph.css"

export default function AboutMe() {
  return (
    <div className="MeleeScreen">
        <video className="MeleeBackgroundVideo" src={MainMenuLoop} autoPlay muted loop playsInline></video>
        <MeleeParagraph text="Hello. I'm Gianfranco Alarcon. I am a senior computer engineering student at the University of Central Florida.
        I have experience in creating software applications for various platforms. I have done freelance work for friends and dove into school projects as well.
        Feel free to take a look at my work and get in touch if you have any questions." />
        
    </div>  
  );
}