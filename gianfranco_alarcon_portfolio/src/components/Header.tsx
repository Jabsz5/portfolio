import './Header.css';
import logo from '../assets/ssbm_shine.png'

export default function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <img src={logo} alt="Logo" className="logo" />
      </div>

      <div className="header-right">
        <a
          href="/GianfrancoAlarconresume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="header-link"
        >
          Resume
        </a>

        <a
          href="https://github.com/Jabsz5"
          target="_blank"
          rel="noopener noreferrer"
          className="header-link"
        >
          GitHub
        </a>

        <a
          href="https://www.tiktok.com/@frank0ez"
          target="_blank"
          rel="noopener noreferrer"
          className="header-link"
        >
          TikTok
        </a>
      </div>
    </header>
  );
}
