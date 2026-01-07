import './educationPage.css'

function EducationPage() {
  return (
    <div className="education-container">
      <h1 className="education-title">Education</h1>

      <div className="education-card">
        <h2>Dr. Yanga Colleges, Inc.</h2>
        <p className="education-year">(2022 – Present)</p>
        <p className="education-degree">
          Bachelor of Science in Information Technology
        </p>
      </div>

      <div className="education-card">
        <h2>St. Michael Academy of Meycauayan, Inc.</h2>
        <p className="education-year">(2020 – 2022)</p>
        <p className="education-degree">
          Senior High School (Grades 11–12)
        </p>
        <p className="education-year">(2016 – 2020)</p>
        <p className="education-degree">
          Junior High School (Grades 7–10)
        </p>
      </div>

      <div className="education-card">
        <h2>Escuela Familia De Montessori, Inc.</h2>
        <p className="education-year">(2010 – 2016)</p>
        <p className="education-degree">
          Primary School (Grades 1–6)
        </p>
      </div>
    </div>
  )
}

export default EducationPage
