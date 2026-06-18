
import MainMenuLoop from "../assets/MainMenuLoop.mp4"
import MeleeParagraph from "../components/MeleeParagraph/MeleeParagraph"

// CLIPS!!!!
import chudDorf from "../../clips/chudanorf combo vs mad fox.mp4"
import foxButtons from "../../clips/fox buttons.mp4"
import foxlmfao from "../../clips/foxlmfao.mp4"
import foxpuffstuff from "../../clips/foxpuffstuff.mp4"
import hodCombo from "../../clips/hodCombo.mp4"
import pichu from "../../clips/pichu comeback.mp4"
import bestMeleeClip from "../../clips/yea this it .mp4"

import "../components/MeleeHeader/MeleeHeader.css";
import "../components/MeleeSelectText/MeleeSelectText.css";
import "../components/InfoBox/InfoBox.css"
import "../components/MeleeCaption/MeleeCaption.css"
import "../components/MeleeParagraph/MeleeParagraph.css"
import "../components/ClipContent/ClipContent.css"

export default function ClipSeason() {
    return (
    <div className="MeleeScreen">
        <video className="MeleeBackgroundVideo" src={MainMenuLoop} autoPlay muted loop playsInline></video>
        <div className="ClipHeader">
            <MeleeParagraph text="Check out my clips :p" />
        </div>
        <div className="ClipContent">
            <video className="ClipVideo" src={chudDorf} controls loop playsInline />
            <video className="ClipVideo" src={foxButtons} controls loop playsInline />
            <video className="ClipVideo" src={foxlmfao} controls loop playsInline />
            <video className="ClipVideo" src={foxpuffstuff} controls loop playsInline />
            <video className="ClipVideo" src={hodCombo} controls loop playsInline />
            <video className="ClipVideo" src={pichu} controls loop playsInline />
            <video className="ClipVideo" src={bestMeleeClip} controls loop playsInline />
        </div>
    </div>
    );
}