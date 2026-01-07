import { useState } from 'react'
import './certificationPage.css'

function CertificationsPage() {
  const slides = [
    [
      {
        title: 'Java Programming',
        issuer: 'Oracle',
        date: 'May 2023',
      },
      {
        title: 'Introduction to CSS',
        issuer: 'TESDA',
        date: 'July 2023',
      },
      {
        title: 'Installing & Configuring Computer Systems',
        issuer: 'TESDA',
        date: 'June 2023',
      },
      {
        title: 'Setting Up Computer Servers',
        issuer: 'TESDA',
        date: 'October 2024',
      },
    ],
    [
      {
        title: 'Setting Up Computer Networks',
        issuer: 'TESDA',
        date: 'October 2024',
      },
      {
        title: 'Computer Hardware Basics',
        issuer: 'Cisco',
        date: 'June 2025',
      },
      {
        title: 'Introduction to Cybersecurity',
        issuer: 'Cisco',
        date: 'December 2024',
      },
      {
        title: 'Agentblazer Champion Workshop',
        issuer: 'PCITE & Salesforce',
        date: 'November 2025',
      },
    ],
  ]

  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) setCurrentSlide(currentSlide + 1)
  }

  const prevSlide = () => {
    if (currentSlide > 0) setCurrentSlide(currentSlide - 1)
  }

  return (
    <div className="cert-container">
      <h1 className="cert-title">Certifications</h1>

      <div className="cert-slide">
        {slides[currentSlide].map((cert, index) => (
          <div className="cert-card" key={index}>
            <h2>{cert.title}</h2>
            <p className="cert-issuer">{cert.issuer}</p>
            <p className="cert-date">{cert.date}</p>
          </div>
        ))}
      </div>

      <div className="cert-buttons">
        <button
          className="btn-cert"
          onClick={prevSlide}
          disabled={currentSlide === 0}
        >
          ◀ Previous
        </button>
        <button
          className="btn-cert"
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
        >
          Next ▶
        </button>
      </div>
    </div>
  )
}

export default CertificationsPage
