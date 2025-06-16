export default function CV({ personal, education, experience }) {
  return (
    <div className="cv">
      <div className="cv-head">
        <div className="user-name">{personal.name || "Your Name"}</div>
        <div className="cv-bar">
          <p>{personal.email || "your.email@example.com"}</p>
          <p>{personal.phone || "+1 (555) 123-4567"}</p>
          <p>{personal.address || "Your Address"}</p>
        </div>
      </div>

      {education && education.length > 0 && (
        <div className="cv-section">
          <h3 className="cv-section-title">Education</h3>
          {education.map((edu, index) => (
            <div key={index} className="cv-item">
              <div className="cv-item-title">{edu.school}</div>
              <div className="cv-item-subtitle">{edu.degree}</div>
              <div className="cv-item-date">
                {edu.startDate} - {edu.endDate}
              </div>
              <div className="cv-item-description">{edu.location}</div>
            </div>
          ))}
        </div>
      )}

      {experience && experience.length > 0 && (
        <div className="cv-section">
          <h3 className="cv-section-title">Experience</h3>
          {experience.map((exp, index) => (
            <div key={index} className="cv-item">
              <div className="cv-item-title">{exp.position}</div>
              <div className="cv-item-subtitle">{exp.company}</div>
              <div className="cv-item-date">
                {exp.startDate} - {exp.endDate}
              </div>
              <div className="cv-item-description">{exp.description}</div>
            </div>
          ))}
        </div>
      )}

      {(!education || education.length === 0) &&
        (!experience || experience.length === 0) && (
          <div className="cv-empty">
            Start filling out the forms to see your CV preview here!
          </div>
        )}
    </div>
  );
}
