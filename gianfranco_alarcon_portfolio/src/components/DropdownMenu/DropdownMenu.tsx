import { useState } from "react";
import "./DropdownMenu.css";

type DropdownMenuProps = {
    onLanguageChange: (lang: string) => void;
};

export default function DropdownMenu({ onLanguageChange}: DropdownMenuProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="dropdown-container">
      <button
        onClick={() => setOpen(!open)}
        className="dropdown-button"
      >
        Languages
      </button>

      {open && (
        <div className="dropdown-menu">
          <div className="py-1 text-sm flex flex-col">
            <button
              className="dropdown-item"
              onClick={() => {setOpen(false); onLanguageChange("en");}}
            >
              English
            </button>
            <button
              className="dropdown-item"
              onClick={() => {setOpen(false); onLanguageChange("es");}}
            >
              Español
            </button>
            <button
              className="dropdown-item"
              onClick={() => {setOpen(false); onLanguageChange("ru");}}
            >
              Русский
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
