import MeleeHeader from "../components/MeleeHeader/MeleeHeader";
import MeleeSelectText from "../components/MeleeSelectText/MeleeSelectText";
import MainMenuLoop from "../assets/MainMenuLoop.mp4"
import InfoBox from "../components/InfoBox/InfoBox"
import MeleeCaption from "../components/MeleeCaption/MeleeCaption";

import "../components/MeleeHeader/MeleeHeader.css";
import "../components/MeleeSelectText/MeleeSelectText.css";
import "../components/InfoBox/InfoBox.css"
import "../components/MeleeCaption/MeleeCaption.css"

// need to keep track of selected melee text and update the info box accordingly
import { useState } from "react";

const menuItems = [
    {
        menuText: "About Me",
        infoText: "Learn more about me and my background."
    },
    {
        menuText: "Resume",
        infoText: "View my resume and work experience."
    },
    {
        menuText: "Projects",
        infoText: "Explore my recent projects and contributions."
    },
    {
        menuText: "Contact",
        infoText: "Get in touch with me for collaborations or inquiries."
    },
    {
        menuText: "Add feature here",
        infoText: "Check out this amazing feature I've added!"
    }
        
]
export default function MeleeScreen(){
    const [selectedIndex, setSelectedIndex] = useState(0);

    return(
    <div className="MeleeScreen">
        <video className="MeleeBackgroundVideo" src={MainMenuLoop} autoPlay muted loop playsInline></video>

        <MeleeHeader text="Main Menu"></MeleeHeader>

        <div className="MeleeText">
            {menuItems.map((item, index) => (
                <MeleeSelectText key={item.menuText} text={item.menuText} isSelected={selectedIndex === index} onHighlight={() => setSelectedIndex(index)} />
            ))}
        </div>

        <div className="InformationBox">
            <InfoBox text={menuItems[selectedIndex].infoText}></InfoBox>
        </div>
        <div className="MeleeCaptionBox">
            <MeleeCaption text={menuItems[selectedIndex].infoText}></MeleeCaption>
        </div>
    </div>    
    );    
}