import { ExternalLink } from "lucide-react"
import styles from "./projects.module.css"
import Image from 'next/image'

const projects = [
  {
    title: "Banque de sang d'un hopital",
    description: "Application pour la Gestion des demandes de poches de Sang",
    image: "/images/tec.png", 
    technologies: ["Vue.js", "Nodejs", "MongoDB", "Bootstrap"],
    link: "https://github.com/Albajunior/Dantec",
  },
  {
    title: "Reseau social",
    description: "Mise en place d'un réseau social pour une entreprise",
    image: "/images/social.jpg",
    technologies: ["React", "Nodejs", "express", "PostgreSql", "Js"],
    link: "https://github.com/Albajunior/Reseau_Social_React-Js",
  },
  {
    title: "Convertisseur Crypto",
    description: "Plateforme de conversion entre monnaies traditionnelles et cryptomonnaies.",
    image: "/images/delt.png",
    technologies: ["JavaScript", "API Crypto", "API Devise"],
    link: "https://www.deltraxafrica.com/deltrax-exchange",
  },
]

export default function Projects() {
  return (
    <section id="projets" className={styles.projects}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Mes Derniers Projets</h2>
        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <div key={index} className={styles.projectCard} >
              <div style={{ position: 'relative' }}>
               <Image src={project.image || "/placeholder.svg"} alt={project.title} className={styles.projectImage} style={{ objectFit: 'contain' }} width= '100' height={192} />
              </div>
              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                <div className={styles.projectTech}>
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className={styles.techTag}>
                      {tech}
                    </span>
                  ))}
                </div>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                  Voir le projet <ExternalLink className={styles.iconSmall} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
