import { useState, useEffect } from 'react'
import './experiencePage.css'

function ExperiencePage() {

    const [data, setData] = useState(null)

    const [currentIndex, setCurrentIndex] = useState(0)
    const [itemsPerPage, setItemsPerPage] = useState(3)

    useEffect(() => {

        fetch('/Data/experience.json')
            .then(res => res.json())
            .then(data => setData(data))
            .catch(err => console.error(err))

    }, [])

    useEffect(() => {

        const handleResize = () => {

            // Mobile or short screen
            if (
                window.innerHeight <= 850 ||
                window.innerWidth <= 900
            ) {
                setItemsPerPage(2)
            } else {
                setItemsPerPage(4)
            }

        }

        handleResize()

        window.addEventListener('resize', handleResize)

        return () =>
            window.removeEventListener('resize', handleResize)

    }, [])

    if (!data) return <div>Loading...</div>

    const experience = data.experience

    const maxIndex = Math.max(
        0,
        experience.length - itemsPerPage
    )

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

    const visibleExperience = experience.slice(
        currentIndex,
        currentIndex + itemsPerPage
    )

    return (
        <div className="experience-container">

            <h1 className="experience-title">
                Experience
            </h1>

            <div className="experience-slide">

                {visibleExperience.map((exp, index) => (

                    <div className="experience-card" key={index}>

                        <h2>{exp.title}</h2>

                        <p className="experience-date">
                            {exp.date}
                        </p>

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
                    disabled={currentIndex === 0}
                >
                    ◀ Previous
                </button>

                <button
                    className="btn-exp"
                    onClick={nextSlide}
                    disabled={currentIndex >= maxIndex}
                >
                    Next ▶
                </button>

            </div>

        </div>
    )
}

export default ExperiencePage