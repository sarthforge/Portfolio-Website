import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Education <span>&</span>
          <br /> Achievements
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in Computer Science</h4>
                <h5>PSIT Kanpur</h5>
              </div>
              <h3>2029</h3>
            </div>
            <p>
              Pursuing Bachelor of Technology in Computer Science & Engineering
              (2025 – 2029). Focusing on core CS fundamentals, Data Structures &
              Algorithms, Object-Oriented Programming, and Java Full Stack
              engineering.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer Certificate</h4>
                <h5>Meta</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Professional certification by Meta demonstrating expertise in
              modern full stack development, React, responsive UI
              architecture, REST APIs, and industry software development
              practices.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Stay Ahead of the AI Curve</h4>
                <h5>Google</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Specialized training program certified by Google exploring
              foundational AI & Machine Learning principles, modern generative
              technologies, and staying prepared for next-generation software
              innovations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
