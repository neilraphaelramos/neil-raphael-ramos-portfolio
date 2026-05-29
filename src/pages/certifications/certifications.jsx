import { useState, useEffect } from 'react'
import './certificationPage.css'

function CertificationsPage() {

    const [data, setData] = useState(null)

    const [currentIndex, setCurrentIndex] = useState(0)
    const [itemsPerPage, setItemsPerPage] = useState(4)

    useEffect(() => {

        fetch('/Data/certifications.json')
            .then(res => res.json())
            .then(data => setData(data))
            .catch(err => console.error(err))

    }, [])

    // Detect browser height
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

    const certifications = data.certifications

    const maxIndex = Math.max(
        0,
        certifications.length - itemsPerPage
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

    const visibleCerts = certifications.slice(
        currentIndex,
        currentIndex + itemsPerPage
    )

    const openCertificate = (file) => {

        if (file) {
            window.open(file, '_blank')
        }

    }

    return (
        <div className="cert-container">

            <h1 className="cert-title">
                Certifications
            </h1>

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

                        {cert.file && (
                            <button
                                className="btn-cert-view"
                                onClick={() =>
                                    openCertificate(cert.file)
                                }
                            >
                                View Certificate
                            </button>
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