import { useState } from "react";
import Header from "../components/Header";
import DropdownMenu from "../components/DropdownMenu/DropdownMenu";
import { coffeeCupDescriptions, getProjectDescription } from "../utils/translation";


import type { Language } from "../utils/translation";

export default function SmartCoffeeCup() {
  const [language, setLanguage] = useState<Language>("en");

  return (
    <>
      <Header />

      <main style={{ paddingTop: "6rem", color: "#eafff1" }}>
        <h1>Smart Coffee Cup</h1>

        <div
          style={{marginTop: "2rem", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "0.75rem", }}
        >
          <DropdownMenu onLanguageChange={setLanguage} />

          <p>{getProjectDescription(language, coffeeCupDescriptions)}</p>
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
            src="/SenioDesign1Demo.mov"
            controls
            style={{
              maxWidth: "100%",
              borderRadius: "12px",
              border: "1px solid rgba(76, 255, 143, 0.3)",
            }}
          />

          <h1>May 2026</h1>
          <p>This was towards the end of the first live demonstration of the prototype. Here we had a working model of all the 
            peripherals working together. The video demonstrates the OLED display, the temperature sensor and the buzzer working together
            to detect temperature of the detected liquid. 
          </p>

          <video
            src="/BluetoothAppDemo.mp4"
            controls
            style={{
              maxWidth: "100%",
              borderRadius: "12px",
              border: "1px solid rgba(76, 255, 143, 0.3)",
            }}
          />

          <h1>June 2026</h1>
          <p>This part demonstrates the mobile app communication with the smart coffee cup. It communicates with an ESP32 controller to send
            and receive information such as the temperature and liquid capacity of the cup. 
          </p>

          <img
            src="/PCBs.jpg"
            alt="Smart Coffee Cup Prototype"
            style={{
              maxWidth: "100%",
              borderRadius: "12px",
              border: "1px solid rgba(76, 255, 143, 0.3)",
            }}
            />

            <h1>June 2026</h1>
          <p>This is a picture of the PCBs designed for the smart coffee cup. These are the PCBs for the temperature sensors, the main board and the load cells
          </p>

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
