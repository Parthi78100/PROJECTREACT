import React from 'react';

function SkillsSection() {
  return (
    <section className="resume-section" id="skills">
      <div className="resume-section-content">
        <h2 className="mb-5">Skills</h2>
        <div className="subheading mb-3">Programming Languages & Tools</div>
        <ul className="list-inline dev-icons">
          <li className="list-inline-item"><i className="fab fa-html5"></i></li>
          <li className="list-inline-item"><i className="fab fa-css3-alt"></i></li>
          <li className="list-inline-item"><i className="fab fa-js-square"></i></li>
          {/* Add other skills */}
        </ul>
        <div className="subheading mb-3">Workflow</div>
        <ul className="fa-ul mb-0">
          <li><span className="fa-li"><i className="fas fa-check"></i></span>Mobile-First, Responsive Design</li>
          <li><span className="fa-li"><i className="fas fa-check"></i></span>Cross Browser Testing & Debugging</li>
          {/* Add other workflow skills */}
        </ul>
      </div>
    </section>
  );
}

export default SkillsSection;
