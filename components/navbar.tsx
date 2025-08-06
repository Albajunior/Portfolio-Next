"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import styles from "./navbar.module.css"
import Image from 'next/image'

const navItems = [
  { name: "Accueil", href: "#hero" },
  { name: "Compétences", href: "#competences" },
  { name: "Expériences", href: "#experiences" },
  { name: "Projets", href: "#projets" },
  { name: "Formation", href: "#formation" },
  { name: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.navbarContent}>
          <a href="#" className={styles.logo}>
            <Image src="/images/IMG_9327.jpeg" alt="Amadou GUISSE" width={67} height={68} className={styles.logoImage} />
          </a>
          <div className={styles.navLinks}>
            {navItems.map((item, index) => (
              <a key={index} href={item.href} className={styles.navLink}>
                {item.name}
              </a>
            ))}
          </div>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={styles.menuButton}>
            {isMenuOpen ? <X className={styles.icon} /> : <Menu className={styles.icon} />}
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className={styles.mobileMenu}>
          <div className={styles.container}>
            <div className={styles.mobileLinks}>
              {navItems.map((item, index) => (
                <a key={index} href={item.href} onClick={() => setIsMenuOpen(false)} className={styles.mobileLink}>
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
