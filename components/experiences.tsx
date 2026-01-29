import styles from "./experiences.module.css"
import Image from 'next/image'

const experiences = [
  {
    role: "Développeur Web Full Stack - Assistant Chef de projet ",
    company: "16Distrub",
    location: "Lyon",
    period: " 2024 - 2025 ",
    tasks: [
      "Développement et mise en place d'une application de gestion.",
      "Automatisation et optimisation des tâches.",
      "Analyse des besoins, gestion des produits et proposition de solutions innovantes.",
    ],
    tools: "Node.js, Vue.js, MongoDB, VBA, Html, Css...",
    logo: "/images/distrub.jpg", // Logo Carrefour
    website: "https://www.carrefour.fr",
  },
  {
    role: "Développeur Web",
    company: "AtooSurf",
    location: "Paris",
    period: "2023 - 2024",
    tasks: [
      "Création d'Application Web (hébergement, logo, référencement...).",
      "Gestion de Projet.",
      "Relation Client - Formation (Suivi et Accompagnement du client).",
      "Création de contenu (Figma, Envato).",
    ],
    tools: "PHP, Wordpress, PrestaShop, MySql, JS, Trello, Html, Css...",
    logo: "/images/atoosurf.png", 
    website: "https://www.atoosurf.net", 
  },
  {
    role: "Développeur Web Junior",
    company: "Deltrax Africa",
    location: "Dakar",
    period: "2 mois de STAGE",
    tasks: [
      "Initialisation a la Cryptomonnaie.",
      "Refonte du site web de l'entreprise.",
      "Mise en place d'une plateforme de conversion : Monnaie <=> Crypto.",
    ],
    tools: "Js, Api Crypto, Api Devise",
    logo: "/images/deltrax.png", 
    website: "https://www.deltraxafrica.com", 
  },
]

export default function Experiences() {
  return (
    <section id="experiences" className={styles.experiences}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Mes Expériences</h2>
        <div className={styles.experienceList}>
          {experiences.map((exp, index) => (
            <div key={index} className={styles.experienceCard}>
              <div className={styles.experienceContent}>
                <h3 className={styles.experienceRole}>{exp.role}</h3>
                <div className={styles.companyInfo}>
                  <p className={styles.experienceCompany}>
                    {exp.company}, {exp.location}
                  </p>
                  <span className={styles.experiencePeriod}>{exp.period}</span>
                </div>
                <ul className={styles.experienceTasks}>
                  {exp.tasks.map((task, taskIndex) => (
                    <li key={taskIndex}>{task}</li>
                  ))}
                </ul>
                <p className={styles.experienceTools}>
                  <span className={styles.toolsLabel}>Outils:</span> {exp.tools}
                </p>
              </div>
              <div className={styles.logoContainer}>
                <a
                  href={exp.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.logoLink}
                  title={`Visiter le site de ${exp.company}`}
                >
                  <Image 
                    src={exp.logo}
                    alt={`Logo ${exp.company}`}
                    className={styles.companyLogo}
                    width={120} height={120}
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
