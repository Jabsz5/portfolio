import './ProjectCard.css'

type ProjectCardProps = {
  title: string
  caption: string
  href: string
  imageSrc: string
  imageAlt?: string
}

export default function ProjectCard({title, caption, href, imageSrc, imageAlt,}: ProjectCardProps) {
  return (
    <article className="project-card">
      <a
        className="project-card-link"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open project: ${title}`}
      >
        <div className="project-card-image-wrap">
          <img
            className="project-card-image"
            src={imageSrc}
            alt={imageAlt ?? `${title} preview`}
            loading="lazy"
          />
        </div>

        <div className="project-card-body">
          <h3 className="project-card-title">{title}</h3>
          <p className="project-card-caption">{caption}</p>
        </div>
      </a>
    </article>
  )
}
