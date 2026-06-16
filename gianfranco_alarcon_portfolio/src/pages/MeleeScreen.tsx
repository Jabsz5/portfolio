import MeleeSelectText from "../components/MeleeSelectText/MeleeSelectText";

export default function MeleeScreen(){

    return(
    <div className="MeleeText">
        <MeleeSelectText text="1-P Mode"></MeleeSelectText>
        <MeleeSelectText text="VS. Mode"></MeleeSelectText>
        <MeleeSelectText text="Trophies"></MeleeSelectText>
        <MeleeSelectText text="Options"></MeleeSelectText>
        <MeleeSelectText text="Data"></MeleeSelectText>
    </div>    
    
    );    
}