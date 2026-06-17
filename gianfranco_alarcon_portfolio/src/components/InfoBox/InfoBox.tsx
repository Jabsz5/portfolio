import "./InfoBox.css"
export default function InfoBox({text}: {text: string}){
    return(
        <div className="InfoBox">
            <p>{text}</p>
        </div>
    );
}