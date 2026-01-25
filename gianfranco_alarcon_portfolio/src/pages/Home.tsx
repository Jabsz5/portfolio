import { useRef } from 'react'
import Header from '../components/Header.tsx'
import ProjectCard from '../components/ProjectCard/ProjectCard.tsx' 

// insert images into this section here
import sharedleImage from '../assets/sharedle.png'
import JLBImage from '../assets/JLBlogo.png'
import projectArtemisImage from '../assets/projectArtemis.jpeg'
// in this middle part

export default function Home() {
    const projectsRef = useRef<HTMLElement | null>(null)

    const scrollToProjects = () => {
        projectsRef.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })
    }

  return (
    <>
      <Header />

    {/* Section 1*/}
      <section className="hero">
        <h1>Gianfranco Alarcon</h1>
        <h2>Computer Engineer</h2>

        <button className="projects-btn" onClick={scrollToProjects}>
            Projects
        </button>
       </section>

    {/* Section 2*/}
       <section ref={projectsRef} className="projects">
        <h2>Projects</h2>
        
        <div className="projects-grid">
          <ProjectCard
            title="Sharedle"
            caption="Wordle-style game final project for UCF's COP4331C course."
            href="https://sharedle.app/"
            imageSrc={sharedleImage}
            imageAlt="Sharedle Icon"
          />

          <ProjectCard
            title="JLB Services"
            caption="Freelance work built for a client located in Manchester UK. Delivery service application for local business."
            href="https://jlbdelivery.co.uk/"
            imageSrc={JLBImage}
            imageAlt="JLB Services Logo"
          />

          <ProjectCard
            title="Project Artemis"
            caption="KnightHacks 2025 Spring Contest Entry. Project Artemis fully independent and controller dependent drone system."
            href="/project-artemis"
            imageSrc={projectArtemisImage}
            imageAlt="image of Project Artemis"
            internal
          />

          
        </div>
        </section>
    </>
  )
}
