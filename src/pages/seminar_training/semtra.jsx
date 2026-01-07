import { useState } from 'react'
import './semtraPage.css'

function SemTraPage() {
  const slides = [
    [
      {
        title: 'Animation Webinar',
        issuer: 'DICT',
        date: 'Nov 2025',
      },
      {
        title: 'Agentblazer Champion Workshop',
        issuer: 'PCITE & Salesforce',
        date: 'Oct 2025',
      },
      {
        title: '4th Regional Cybersecurity Conference',
        issuer: 'Holy Angel University',
        date: 'Oct 2025',
      },
    ],
    [
      {
        title: 'Digital Transformation 101: A Webinar Series on Technology Adoption of MSMes',
        issuer: 'UP, Diliman, Quezon City',
        date: 'Nov 2024',
      },
      {
        title: 'CCS Tech Seminar Series 2025',
        issuer: 'DYCI',
        date: 'April 2025',
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
    <div className="semtra-container">
      <h1 className="semtra-title">Training & Seminar</h1>

      <div className="semtra-slide">
        {slides[currentSlide].map((item, index) => (
          <div className="semtra-card" key={index}>
            <h2>{item.title}</h2>
            {item.issuer && <p className="semtra-issuer">{item.issuer}</p>}
            <p className="semtra-date">{item.date}</p>
          </div>
        ))}
      </div>

      <div className="semtra-buttons">
        <button
          className="btn-semtra"
          onClick={prevSlide}
          disabled={currentSlide === 0}
        >
          ◀ Previous
        </button>
        <button
          className="btn-semtra"
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
        >
          Next ▶
        </button>
      </div>
    </div>
  )
}

export default SemTraPage
