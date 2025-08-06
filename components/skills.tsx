import styles from "./skills.module.css"

const skills = {
  languages: ["JavaScript", "PHP", "HTML", "CSS", "SCSS"],
  frameworks: ["Vue.js", "Node.js", "Symfony", "React", "Bootstrap", "Next"],
  databases: ["MySQL", "PostgreSQL", "MongoDB"],
  projectManagement: ["Trello", "Notion", "Scrum", "Kanban", "Slack"],
  devops: ["Docker", "Kubernetes", "Gestion des accès", "Sécurisation des applications web"],
  others: ["Git", "GitHub", "Windows", "Linux", "IOS", "WordPress", "PrestaShop"],
}

export default function Skills() {
  return (
    <section id="competences" className={styles.skills}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Mes Compétences</h2>
        <div className={styles.skillsGrid}>
          <div className={styles.skillCard}>
            <h3 className={styles.skillTitle}>Langages</h3>
            <div className={styles.skillTags}>
              {skills.languages.map((skill, index) => (
                <span key={index} className={styles.skillTag}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className={styles.skillCard}>
            <h3 className={styles.skillTitle}>Frameworks</h3>
            <div className={styles.skillTags}>
              {skills.frameworks.map((skill, index) => (
                <span key={index} className={styles.skillTag}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className={styles.skillCard}>
            <h3 className={styles.skillTitle}>Bases de données</h3>
            <div className={styles.skillTags}>
              {skills.databases.map((skill, index) => (
                <span key={index} className={styles.skillTag}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className={styles.skillCard}>
            <h3 className={styles.skillTitle}>Gestion de projet</h3>
            <div className={styles.skillTags}>
              {skills.projectManagement.map((skill, index) => (
                <span key={index} className={styles.skillTag}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className={styles.skillCard}>
            <h3 className={styles.skillTitle}>DevOps & Sécurité</h3>
            <div className={styles.skillTags}>
              {skills.devops.map((skill, index) => (
                <span key={index} className={styles.skillTag}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className={styles.skillCard}>
            <h3 className={styles.skillTitle}>Autres</h3>
            <div className={styles.skillTags}>
              {skills.others.map((skill, index) => (
                <span key={index} className={styles.skillTag}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
