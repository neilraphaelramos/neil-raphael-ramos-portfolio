import './projectPage.css'
import { useState, useEffect } from 'react'

function ProjectsPage() {
    const [activeProject, setActiveProject] = useState(null)
    const [data, setData] = useState(null)

    const [currentIndex, setCurrentIndex] = useState(0)
    const [projectsPerPage, setProjectsPerPage] = useState(2)

    const [currentSlides, setCurrentSlides] = useState({})

    useEffect(() => {
        fetch('/Data/projects.json')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error(error))
    }, [])

    // Detect browser height
    useEffect(() => {
        const handleResize = () => {
            if (window.innerHeight <= 730) {
                setProjectsPerPage(1)
            } else {
                setProjectsPerPage(2)
            }
        }

        handleResize()
        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    useEffect(() => {
        if (!data) return

        const interval = setInterval(() => {
            setCurrentSlides(prev => {
                const updated = { ...prev }

                data.projects.forEach(project => {
                    if (project.images) {
                        const current = updated[project.id] || 0

                        updated[project.id] =
                            (current + 1) % project.images.length
                    }
                })

                return updated
            })
        }, 3000)

        return () => clearInterval(interval)
    }, [data])

    if (!data) return <div>Loading...</div>

    const projects = data.projects

    const maxIndex = Math.max(0, projects.length - projectsPerPage)

    const nextProjects = () => {
        if (currentIndex < maxIndex) {
            setCurrentIndex(prev => prev + projectsPerPage)
        }
    }

    const prevProjects = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prev => prev - projectsPerPage)
        }
    }

    const visibleProjects = projects.slice(
        currentIndex,
        currentIndex + projectsPerPage
    )

    return (
        <div className="projects-container">
            <h1 className="projects-title">Projects</h1>

            <div className="project-subcontainer">
                {visibleProjects.map(project => (
                    <div className="project-card" key={project.id}>
                        <img
                            src={
                                project.images
                                    ? project.images[currentSlides[project.id] || 0]
                                    : project.image
                            }
                            alt={project.title}
                            className="project-image"
                            style={{
                                objectFit: project["image-fit"] || "cover"
                            }}
                        />

                        <div className="project-info">
                            <h2>{project.title}</h2>

                            <div className="project-tags">
                                {project.tags.map((tag, index) => (
                                    <span className="tag" key={index}>
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="project-links">
                                {project.hasLiveDemo && project.live && (
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {project.id === 2
                                            ? 'Game Demo'
                                            : 'Live Demo'}
                                    </a>
                                )}

                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        GitHub
                                    </a>
                                )}

                                <button
                                    className="btn-details"
                                    onClick={() =>
                                        setActiveProject(project)
                                    }
                                >
                                    Full Details
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Buttons */}
            <div className="carousel-controls">
                <button
                    onClick={prevProjects}
                    disabled={currentIndex === 0}
                >
                    ◀ Previous
                </button>

                <button
                    onClick={nextProjects}
                    disabled={currentIndex >= maxIndex}
                >
                    Next ▶
                </button>
            </div>

            {/* MODAL */}
            {activeProject && (
                <div
                    className="modal-overlay"
                    onClick={() => setActiveProject(null)}
                >
                    <div
                        className="modal-content"
                        onClick={e => e.stopPropagation()}
                    >
                        <img
                            src={
                                activeProject.images
                                    ? activeProject.images[
                                    currentSlides[activeProject.id] || 0
                                    ]
                                    : activeProject.image
                            }
                            alt={activeProject.title}
                            style={{
                                objectFit: activeProject["image-fit"] || "cover"
                            }}
                        />

                        <h2>{activeProject.title}</h2>

                        <div className="project-tags modal-tags">
                            {activeProject.tags.map((tag, index) => (
                                <span className="tag" key={index}>
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <p>{activeProject.description}</p>

                        <div className="modal-actions">
                            {activeProject.live && (
                                <a
                                    href={activeProject.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Visit
                                </a>
                            )}

                            <button
                                onClick={() =>
                                    setActiveProject(null)
                                }
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ProjectsPage