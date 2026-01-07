import { useState } from 'react'
import './experiencePage.css'

function ExperiencePage() {
    const slides = [
        [
            {
                title: 'Capstone Project – PawCare',
                date: 'January 2025 – Present',
                points: [
                    'Full-stack development using React JS and REST APIs',
                    'Integrated PayMongo for secure payments',
                    'Used Git/GitHub for version control',
                    'Deployed via Vercel (frontend) and Render (backend)',
                ],
            },
            {
                title: 'Game Development – The Adventure Worlds',
                date: 'September 2025 – Present',
                points: [
                    'Developed a 2D/3D adventure game using Godot Engine and GDScript',
                    'Designed UI, scenes, and interactions',
                    'Implemented collision detection and physics',
                    'Created 3D assets using Blender',
                ],
            },
        ],
        [
            {
                title: 'React JS Movie Website',
                date: 'July 2024 – December 2024',
                points: [
                    'Built a responsive movie website using React JS and TMDB API',
                    'Implemented search and filtering features',
                    'Handled frontend-backend integration',
                ],
            },
            {
                title: 'SHS Work Immersion – Creotec Company',
                date: 'February 2021',
                points: [
                    'Developed a payroll calculator using MIT App Inventor',
                    'Conducted testing and debugging with the development team',
                ],
            },
        ],
    ]

    const [currentSlide, setCurrentSlide] = useState(0)

    const nextSlide = () => {
        if (currentSlide < slides.length - 1) {
            setCurrentSlide(currentSlide + 1)
        }
    }

    const prevSlide = () => {
        if (currentSlide > 0) {
            setCurrentSlide(currentSlide - 1)
        }
    }

    return (
        <div className="experience-container">
            <h1 className="experience-title">Experience</h1>

            <div className="experience-slide">
                {slides[currentSlide].map((exp, index) => (
                    <div className="experience-card" key={index}>
                        <h2>{exp.title}</h2>
                        <p className="experience-date">{exp.date}</p>
                        <ul>
                            {exp.points.map((point, i) => (
                                <li key={i}>{point}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <div className="experience-buttons">
                <button
                    className="btn-exp"
                    onClick={prevSlide}
                    disabled={currentSlide === 0}
                >
                    ◀ Previous
                </button>

                <button
                    className="btn-exp"
                    onClick={nextSlide}
                    disabled={currentSlide === slides.length - 1}
                >
                    Next ▶
                </button>
            </div>
        </div>
    )
}

export default ExperiencePage
