import MainMenuLoop from "../assets/MainMenuLoop.mp4"

export default function Contact() {
  return (
    <div className="MeleeScreen">
        <video className="MeleeBackgroundVideo" src={MainMenuLoop} autoPlay muted loop playsInline></video>
        <p> Hello. I'm Gianfranco Alarcon, a passionate software developer.</p>
    </div>  
  );
}