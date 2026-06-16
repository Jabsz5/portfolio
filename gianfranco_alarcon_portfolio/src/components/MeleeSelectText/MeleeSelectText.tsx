import "./MeleeSelectText.css"
type MeleeSelectTextProp = {
    text: String;
};


export default function MeleeSelectText({text}: MeleeSelectTextProp) {
  return (
    <div className="MeleeSelectTextBox">
        <h3 className="menu-text">{text}</h3>
    </div>
  );
}
