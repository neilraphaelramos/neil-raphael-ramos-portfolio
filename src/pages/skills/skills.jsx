import { useState } from 'react'
import './skillsPage.css'

function SkillsPage() {
  const slides = [
    [
      {
        category: 'Programming & Development',
        items: ['Java', 'JavaScript', 'PHP', 'SQL', 'HTML', 'CSS'],
      },
      {
        category: 'Game Development (Self-Taught)',
        items: ['Godot Engine', 'GDScript'],
      },
      {
        category: 'Databases',
        items: ['Firebase', 'MySQL'],
      },
      {
        category: 'Version Control',
        items: ['Git', 'GitHub'],
      },
    ],
    [
      {
        category: 'Tools & Software',
        items: ['Adobe Photoshop', 'Blender (3D)', 'Microsoft Office (Word, Excel, PowerPoint)'],
      },
      {
        category: 'IT & Systems',
        items: ['Computer Assembly', 'Computer Technician', 'OS Installation', 'Networking Hardware Setup'],
      },
      {
        category: 'Soft Skills',
        items: ['Communication', 'Team Collaboration', 'Adaptability', 'Time Management'],
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
    <div className="skills-container">
      <h1 className="skills-title">Skills</h1>

      <div className="skills-slide">
        {slides[currentSlide].map((skill, index) => (
          <div className="skills-card" key={index}>
            <h2>{skill.category}</h2>
            <ul>
              {skill.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="skills-buttons">
        <button
          className="btn-skill"
          onClick={prevSlide}
          disabled={currentSlide === 0}
        >
          ◀ Previous
        </button>

        <button
          className="btn-skill"
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
        >
          Next ▶
        </button>
      </div>
    </div>
  )
}

export default SkillsPage
