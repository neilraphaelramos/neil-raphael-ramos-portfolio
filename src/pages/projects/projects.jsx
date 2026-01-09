import './projectPage.css'
import { useState } from 'react'

function ProjectsPage() {
    const [activeProject, setActiveProject] = useState(null)

    const projects = [
        {
            id: 1,
            title: 'PawCare: Enhancing Veterinary Efficiency and Client Engagement Through Digital Solutions',
            image: '/images/pawcare.PNG',
            tags: ['Full-Stack Developer', 'Backend Developer', 'Frontend Developer', 'Debugger'],
            description: `
PawCare is a full-stack web-based platform designed to modernize veterinary services.
It provides appointment scheduling, secure online payments, and client management.
Built with React JS and REST APIs, integrated with PayMongo for payments, and deployed using Vercel and Render.
            `,
            hasLiveDemo: false,
            live: 'https://pawcare-theta.vercel.app/',
            github: 'https://github.com/neilraphaelramos/PawCare-Dev-Frontend.git',
        },
        {
            id: 2,
            title: 'The Adventure Worlds (Godot | Self-Taught)',
            image: '/images/game_project.png',
            tags: ['Game Developer', '3D Artist', 'Game Logic', 'Debugger', 'Self-Taught'],
            description: `
The Adventure Worlds is a self-taught game development project built using Godot Engine.
Features include 2D/3D environments, collision detection, physics-based interactions,
custom UI, and Blender-created 3D assets. Currently in beta testing.
            `,
            hasLiveDemo: true,
            live: 'https://test-game-v1.vercel.app/',
        },
    ]

    return (
        <div className="projects-container">
            <h1 className="projects-title">Projects</h1>

            <div className="project-subcontainer">
                {projects.map(project => (
                    <div className="project-card" key={project.id}>
                        <img
                            src={project.image}
                            alt={project.title}
                            className="project-image"
                        />

                        <div className="project-info">
                            <h2>{project.title}</h2>

                            <div className="project-links">
                                {project.hasLiveDemo && project.live && (
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {project.id === 2 ? 'Game Demo' : 'Live Demo'}
                                    </a>
                                )}
                                {project.github && (
                                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                                        GitHub
                                    </a>
                                )}
                                <button
                                    className="btn-details"
                                    onClick={() => setActiveProject(project)}
                                >
                                    Full Details
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* MODAL */}
            {activeProject && (
                <div className="modal-overlay" onClick={() => setActiveProject(null)}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <img src={activeProject.image} alt={activeProject.title} />
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
                                <a href={activeProject.live} target="_blank" rel="noopener noreferrer">
                                    Visit
                                </a>
                            )}
                            <button onClick={() => setActiveProject(null)}>Close</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ProjectsPage
