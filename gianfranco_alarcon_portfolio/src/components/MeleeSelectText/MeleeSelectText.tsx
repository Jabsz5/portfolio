import "./MeleeSelectText.css"
type MeleeSelectTextProp = {
    text: String;
    isSelected?: boolean;
    onHighlight?: () => void;
    onClick?: () => void;
  };


export default function MeleeSelectText({text, isSelected = false, onHighlight, onClick}: MeleeSelectTextProp) {
  return (
    <button className={`MeleeSelectTextBox ${isSelected ? "selected" : ""}`} onMouseEnter={onHighlight} onFocus={onHighlight} onClick={onClick}>
        <h3 className="menu-text">{text}</h3>
    </button>
  );
}
