import React from 'react';

function ExperienceSection() {
  return (
    <section className="resume-section" id="experience">
      <div className="resume-section-content">
        <h2 className="mb-5">Experience</h2>
        {/* Experience 1 */}
        <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="flex-grow-1">
            <h3 className="mb-0">Senior Web Developer</h3>
            <div className="subheading mb-3">Intelitec Solutions</div>
            <p>Bring to the table win-win survival strategies to ensure proactive domination...</p>
          </div>
          <div className="flex-shrink-0">
            <span className="text-primary">March 2013 - Present</span>
          </div>
        </div>
        {/* Additional experience sections */}
      </div>
    </section>
  );
}

export default ExperienceSection;
