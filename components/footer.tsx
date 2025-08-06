import { Github, Linkedin } from "lucide-react"
import styles from "./footer.module.css"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.copyright}>
            <p>&copy; {new Date().getFullYear()} Amadou GUISSE. Tous droits réservés.</p>
          </div>
          <div className={styles.footerSocial}>
            <a href="https://github.com/AlbajuniorPortoFolio" target="_blank" rel="noopener noreferrer">
              <Github className={styles.iconSmall} />
            </a>
            <a href="https://www.linkedin.com/in/amadou-guisse-237aa817a/" target="_blank" rel="noopener noreferrer">
              <Linkedin className={styles.iconSmall} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
