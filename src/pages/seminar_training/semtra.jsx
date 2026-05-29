import { useState, useEffect } from 'react'
import './semtraPage.css'

function SemTraPage() {

    const [data, setData] = useState(null)

    const [currentIndex, setCurrentIndex] = useState(0)
    const [itemsPerPage, setItemsPerPage] = useState(4)

    // Fetch JSON
    useEffect(() => {

        fetch('/Data/seminars.json')
            .then(res => res.json())
            .then(data => setData(data))
            .catch(err => console.error(err))

    }, [])

    useEffect(() => {

        const handleResize = () => {

            if (window.innerHeight <= 850 || window.innerWidth <= 500) {
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

    const seminars = data.seminars

    const maxIndex = Math.max(
        0,
        seminars.length - itemsPerPage
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

    const visibleSeminars = seminars.slice(
        currentIndex,
        currentIndex + itemsPerPage
    )

    return (
        <div className="semtra-container">

            <h1 className="semtra-title">
                Training & Seminar
            </h1>

            <div className="semtra-slide">

                {visibleSeminars.map((item, index) => (

                    <div className="semtra-card" key={index}>

                        <h2>{item.title}</h2>

                        {item.issuer && (
                            <p className="semtra-issuer">
                                {item.issuer}
                            </p>
                        )}

                        <p className="semtra-date">
                            {item.date}
                        </p>

                    </div>

                ))}

            </div>

            <div className="semtra-buttons">

                <button
                    className="btn-semtra"
                    onClick={prevSlide}
                    disabled={currentIndex === 0}
                >
                    ◀ Previous
                </button>

                <button
                    className="btn-semtra"
                    onClick={nextSlide}
                    disabled={currentIndex >= maxIndex}
                >
                    Next ▶
                </button>

            </div>

        </div>
    )
}

export default SemTraPage