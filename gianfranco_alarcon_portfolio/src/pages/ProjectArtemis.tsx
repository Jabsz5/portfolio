import { useState } from "react";
import Header from "../components/Header";
import DropdownMenu from "../components/DropdownMenu/DropdownMenu";
import { getProjectDescription } from "../utils/translation";

export default function ProjectArtemis() {
  const [language, setLanguage] = useState("en");

  return (
    <>
      <Header />

      <main style={{ paddingTop: "6rem", color: "#eafff1" }}>
        <h1>Project Artemis</h1>

        <div
          style={{marginTop: "2rem", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "0.75rem", }}
        >
          <DropdownMenu onLanguageChange={setLanguage} />

          <p>{getProjectDescription(language)}</p>
        </div>

        <div
          style={{
            marginTop: "2rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "0.75rem",
          }}
        >
          <video
            src="/artemisdemo.mp4"
            controls
            style={{
              maxWidth: "100%",
              borderRadius: "12px",
              border: "1px solid rgba(76, 255, 143, 0.3)",
            }}
          />

          <a
            href="https://github.com/Jabsz5/ForkedProjectArtemis"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            GitHub link for Project Artemis
          </a>
        </div>
      </main>
    </>
  );
}
