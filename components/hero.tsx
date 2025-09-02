import { Github, Linkedin } from "lucide-react"
import styles from "./hero.module.css"
import Image from 'next/image'

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>Amadou GUISSE</h1>
            <h2 className={styles.heroSubtitle}>Développeur Junior - Full JS - Php Symfony</h2>
            <div className={styles.contactInfo}>
              <p>25 ans - Lyon (Prêt à déménager)</p>
              <p>
                <a href="tel:0752674346">☎ 07 52 67 43 46</a>
              </p>
              <p>
                <a href="mailto:juniorclass356@gmail.com">juniorclass356@gmail.com</a>
              </p>
              <div className={styles.socialLinks}>
                <a href="https://github.com/AlbajuniorPortoFolio" target="_blank" rel="noopener noreferrer">
                  <Github className={styles.icon} />
                </a>
                <a href="https://www.linkedin.com/in/amadou-guisse-237aa817a/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className={styles.icon} />
                </a>
              </div>
            </div>
            <p className={styles.heroDescription}>
            Titulaire d’un Mastère 2 en Système d’information et Sécurité, après deux années d’alternance en développement web 
            et gestion de projet, je suis à la
            recherche d&apos;un CDI ou CDD en développement web pour mettre à profit mes compétences et contribuer aux
            projets innovants de votre entreprise.
            </p>
            <p className={styles.availability}>Disponibilité: Asap</p>
          </div>
          <div className={styles.heroImage} >
            <div className={styles.profileImage} >
              <Image src="/images/IMG_0362.jpeg" alt="Amadou GUISSE" width={248} height={248}  />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
