import { useState, useEffect } from 'react'
import './certificationPage.css'

function CertificationsPage() {

    const [data, setData] = useState(null)
    const [currentIndex, setCurrentIndex] = useState(0)
    const [itemsPerPage, setItemsPerPage] = useState(4)

    useEffect(() => {

        console.log("Fetching certifications JSON...")

        fetch('/Data/certifications.json')
            .then(res => {
                console.log("Fetch response:", res)
                return res.json()
            })
            .then(data => {
                console.log("Data loaded:", data)
                setData(data)
            })
            .catch(err => console.error("Fetch error:", err))

    }, [])

    // Responsive items per page
    useEffect(() => {

        const handleResize = () => {

            if (window.innerHeight <= 850 || window.innerWidth <= 500) {
                console.log("Small screen → 2 items per page")
                setItemsPerPage(2)
            } else {
                console.log("Large screen → 4 items per page")
                setItemsPerPage(4)
            }

        }

        handleResize()
        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)

    }, [])

    if (!data) return <div>Loading...</div>

    const certifications = data.certifications

    const maxIndex = Math.max(0, certifications.length - itemsPerPage)

    const nextSlide = () => {
        console.log("NEXT clicked")

        if (currentIndex < maxIndex) {
            setCurrentIndex(prev => prev + itemsPerPage)
        }
    }

    const prevSlide = () => {
        console.log("PREVIOUS clicked")

        if (currentIndex > 0) {
            setCurrentIndex(prev => prev - itemsPerPage)
        }
    }

    const visibleCerts = certifications.slice(
        currentIndex,
        currentIndex + itemsPerPage
    )

    console.log("Visible certs:", visibleCerts)

    return (
        <div className="cert-container">

            <h1 className="cert-title">Certifications</h1>

            <div className="cert-slide">

                {visibleCerts.map((cert, index) => (

                    <div className="cert-card" key={index}>

                        <h2>{cert.title}</h2>

                        <p className="cert-issuer">
                            {cert.issuer}
                        </p>

                        <p className="cert-date">
                            {cert.date}
                        </p>

                        {/* ✅ FIXED: using href instead of window.open */}
                        {cert.file && (
                            <a
                                className="btn-cert-view"
                                href={cert.file}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View Certificate
                            </a>
                        )}

                    </div>

                ))}

            </div>

            <div className="cert-buttons">

                <button
                    className="btn-cert"
                    onClick={prevSlide}
                    disabled={currentIndex === 0}
                >
                    ◀ Previous
                </button>

                <button
                    className="btn-cert"
                    onClick={nextSlide}
                    disabled={currentIndex >= maxIndex}
                >
                    Next ▶
                </button>

            </div>

        </div>
    )
}

export default CertificationsPage