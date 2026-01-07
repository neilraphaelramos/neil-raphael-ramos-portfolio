import './homePage.css'
import { TfiEmail } from 'react-icons/tfi'
import { FaGithub, FaDeviantart, FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";

function HomePage() {
    return (
        <div className='home-container'>
            <div className='card-home'>
                <div className='info-container'>
                    <h2 className='info-name'>Neil Raphael Ramos</h2>
                    <p className='info-description'>
                        Motivated IT student and PC enthusiast with
                        hands-on experience in computer building,
                        troubleshooting, OS installation, basic networking,
                        intermediate programming, and proficiency in Photoshop
                        and Blender 3D modeling, driven by continuous self-development
                        and improvement.
                    </p>
                    <div className='contact-info'>
                        <div className='contact-subcontainer'>
                            <TfiEmail className="contact-icon" />
                            <a
                                href="mailto:neilraphael.ramos4@gmail.com"
                                className='link-contact'
                            >
                                neilraphael.ramos4@gmail.com
                            </a>
                        </div>

                        <div className='contact-subcontainer'>
                            <FaGithub className="contact-icon" />
                            <a
                                href="https://github.com/neilraphaelramos"
                                className='link-contact'
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Github
                            </a>
                        </div>

                        <div className='contact-subcontainer'>
                            <FaPhoneAlt className="contact-icon" />
                            <a href="tel:+63905424926" className='link-contact'>
                                +63 905 424 926
                            </a>
                        </div>

                        <div className='contact-subcontainer'>
                            <FaLocationDot className="contact-icon" />
                            <span className='link-contact'>

                                Marilao, Philippines 3019
                            </span>
                        </div>

                    </div>
                </div>
                <div className='home-subcontainer-cv'>
                    <a
                        className='view-cv-btn'
                        href='/Data/Neil_Raphael_Ramos_CV.pdf'
                        rel='noopener noreferrer'
                        target='_blank'
                    >
                        View CV
                    </a>
                </div>
            </div>
        </div>
    )
}

export default HomePage
