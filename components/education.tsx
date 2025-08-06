import styles from "./education.module.css"

const education = [
  {
    degree: "Bac+5 Chef de projet web et cybersécurité (Alternance)",
    school: "Cloud Campus",
    location: "Paris",
    period: "Mars 2024 - Mars 2025",
  },
  {
    degree: "Bac+4 Développeur Web Full Stack (Alternance)",
    school: "Cloud Campus",
    location: "Paris",
    period: "Octobre 2022 - Novembre 2023",
  },
  {
    degree: "Formation en Développeur Web (100% en ligne)",
    school: "OpenClassroom",
    period: "Février 2022 - Juin 2022",
  },
  {
    degree: "Licence informatique option Génie Logiciel",
    school: "Université Dakar Bourguiba",
    location: "Dakar",
    period: "Octobre 2018 - Juillet 2021",
  },
]

export default function Education() {
  return (
    <section id="formation" className={styles.education}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Ma Formation</h2>
        <div className={styles.educationList}>
          {education.map((edu, index) => (
            <div key={index} className={styles.educationCard}>
              <div className={styles.educationHeader}>
                <div>
                  <h3 className={styles.educationDegree}>{edu.degree}</h3>
                  <p className={styles.educationSchool}>
                    {edu.school}
                    {edu.location ? `, ${edu.location}` : ""}
                  </p>
                </div>
                <p className={styles.educationPeriod}>{edu.period}</p>
              </div>
              {/* {edu.description && <p className={styles.educationDescription}>{edu.description}</p>} */}
            </div>
          ))}
        </div>

        <div className={styles.languages}>
          <h3 className={styles.languagesTitle}>Langues</h3>
          <div className={styles.languagesList}>
            <div className={styles.languageItem}>
              <span className={styles.languageName}>Français:</span>
              <span className={styles.languageLevel}>Natif</span>
            </div>
            <div className={styles.languageItem}>
              <span className={styles.languageName}>Anglais:</span>
              <span className={styles.languageLevel}>Intermédiaire</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
