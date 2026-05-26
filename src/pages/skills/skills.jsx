import { useState, useEffect } from 'react'
import './skillsPage.css'

function SkillsPage() {

    const [data, setData] = useState(null)

    const [currentIndex, setCurrentIndex] = useState(0)
    const [itemsPerPage, setItemsPerPage] = useState(4)

    // Fetch JSON
    useEffect(() => {

        fetch('/Data/skills.json')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error(error))

    }, [])

    // Detect browser height
    useEffect(() => {

        const handleResize = () => {

            if (window.innerHeight <= 750) {
                setItemsPerPage(2)
            } else {
                setItemsPerPage(4)
            }

        }

        handleResize()

        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)

    }, [])

    if (!data) return <div>Loading...</div>

    const skills = data.skills

    const maxIndex = Math.max(0, skills.length - itemsPerPage)

    const nextSlide = () => {

        if (currentIndex < maxIndex) {
            setCurrentIndex(prev => prev + itemsPerPage)
        }

    }

    const prevSlide = () => {

        if (currentIndex > 0) {
            setCurrentIndex(prev => prev - itemsPerPage)
        }

    }

    const visibleSkills = skills.slice(
        currentIndex,
        currentIndex + itemsPerPage
    )

    return (
        <div className="skills-container">

            <h1 className="skills-title">Skills</h1>

            <div className="skills-slide">

                {visibleSkills.map((skill, index) => (

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
                    disabled={currentIndex === 0}
                >
                    ◀ Previous
                </button>

                <button
                    className="btn-skill"
                    onClick={nextSlide}
                    disabled={currentIndex >= maxIndex}
                >
                    Next ▶
                </button>

            </div>

        </div>
    )
}

export default SkillsPage