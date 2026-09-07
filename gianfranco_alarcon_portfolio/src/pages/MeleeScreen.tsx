import MeleeHeader from "../components/MeleeHeader/MeleeHeader";
import MeleeSelectText from "../components/MeleeSelectText/MeleeSelectText";
import MainMenuLoop from "../assets/MainMenuLoop.mp4";
import InfoBox from "../components/InfoBox/InfoBox";
import MeleeCaption from "../components/MeleeCaption/MeleeCaption";

import "../components/MeleeHeader/MeleeHeader.css";
import "../components/MeleeSelectText/MeleeSelectText.css";
import "../components/InfoBox/InfoBox.css";
import "../components/MeleeCaption/MeleeCaption.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const menuItems = [
  {
    menuText: "About Me",
    infoText: "Learn more about me and my background.",
    path: "/AboutMe",
  },
  {
    menuText: "Resume",
    infoText: "View my resume and work experience.",
    path: "/Gianfranco_Alarcon_CpE_updated.pdf",
    type: "pdf",
  },
  {
    menuText: "Projects",
    infoText: "Explore my recent projects and contributions.",
    path: "/",
  },
  {
    menuText: "Contact",
    infoText: "Get in touch with me for collaborations or inquiries.",
    path: "/Contact",
  },
  {
    menuText: "Add feature here",
    infoText: "Check out this amazing feature I've added!",
    path: "/ClipSeason",
  },
];

export default function MeleeScreen() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const navigate = useNavigate();

  return (
    <div className="MeleeScreen">
      <video
        className="MeleeBackgroundVideo"
        src={MainMenuLoop}
        autoPlay
        muted
        loop
        playsInline
      />

      <MeleeHeader text="Main Menu" />

      <div className="MeleeText">
        {menuItems.map((item, index) => (
          <MeleeSelectText
            key={item.menuText}
            text={item.menuText}
            isSelected={selectedIndex === index}
            onHighlight={() => setSelectedIndex(index)}
            onClick={() => {
              if (item.type === "pdf") {
                window.open(item.path, "_blank", "noopener,noreferrer");
              } else {
                navigate(item.path);
              }
            }}
          />
        ))}
      </div>

      <div className="InformationBox">
        <InfoBox text={menuItems[selectedIndex].infoText} />
      </div>

      <div className="MeleeCaptionBox">
        <MeleeCaption text={menuItems[selectedIndex].infoText} />
      </div>
    </div>
  );
}