import "./MeleeHeader.css"
type MeleeHeaderProp = {
    text: String;
};

export default function MeleeHeader({text}: MeleeHeaderProp){
    return(
        <div className="MeleeHeader">
            <h1>{text}</h1>
        </div>
    );
}