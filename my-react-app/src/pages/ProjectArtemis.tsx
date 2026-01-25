import Header from '../components/Header'

export default function ProjectArtemis() {
  return (
    <>
      <Header />

      <main style={{ paddingTop: '6rem', color: '#eafff1' }}>
        <h1>Project Artemis</h1>

        <p>
          This was my project entry for KnightHacks 2025 Spring Contest. It is an
          automated turret that can track and follow people using computer vision.
          It is also able to be manually controlled with a game controller. The
          project uses a Raspberry Pi as the main computer, along with a camera
          module and servos for movement. The computer vision is done using OpenCV
          and a pre-trained model for person detection. The Arduino is used for
          reading inputs from a game controller.
        </p>

        <div style={{marginTop: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '0.75rem',}}>
          <video
            src="/artemisdemo.mp4"
            controls
            style={{
              maxWidth: '100%',
              borderRadius: '12px',
              border: '1px solid rgba(76, 255, 143, 0.3)',
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
  )
}
