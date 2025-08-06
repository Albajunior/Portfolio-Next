"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin } from "lucide-react"
import styles from "./contact.module.css"

export default function Contact() {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setContactForm((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to a backend
    console.log("Form submitted:", contactForm)
    // Reset form after submission
    setContactForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
    // Show success message (in a real app)
    alert("Message envoyé avec succès!")
  }

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Me Contacter</h2>
        <div className={styles.contactContainer}>
          <form onSubmit={handleSubmit} className={styles.contactForm}>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Nom</label>
                <input type="text" id="name" name="name" value={contactForm.name} onChange={handleChange} required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={contactForm.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="subject">Sujet</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={contactForm.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={contactForm.message}
                onChange={handleChange}
                rows={5}
                required
              ></textarea>
            </div>
            <div className={styles.formGroup}>
              <button type="submit" className={styles.submitButton}>
                Envoyer
              </button>
            </div>
          </form>

          <div className={styles.contactInfoList}>
            <div className={styles.contactInfoItem}>
              <Mail className={styles.icon} />
              <a href="mailto:juniorclass356@gmail.com">juniorclass356@gmail.com</a>
            </div>
            <div className={styles.contactInfoItem}>
              <Phone className={styles.icon} />
              <a href="tel:0752674346">07 52 67 43 46</a>
            </div>
            <div className={styles.contactInfoItem}>
              <MapPin className={styles.icon} />
              <span>Lyon, France</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
