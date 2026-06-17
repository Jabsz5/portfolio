import "./MeleeSelectText.css"
type MeleeSelectTextProp = {
    text: String;
    isSelected?: boolean;
    onHighlight?: () => void;};


export default function MeleeSelectText({text, isSelected = false, onHighlight}: MeleeSelectTextProp) {
  return (
    <button className={`MeleeSelectTextBox ${isSelected ? "selected" : ""}`} onMouseEnter={onHighlight} onFocus={onHighlight}>
        <h3 className="menu-text">{text}</h3>
    </button>
  );
}
