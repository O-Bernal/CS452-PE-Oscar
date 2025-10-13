import "./Resume.css";

function Resume() {
  return (
    <div className="resume">
      <h1 className="name">Student Name</h1>
      <p className="contact">
        123 Main Street, Anytown USA, 12345 | (123) 456-7890 | studentname@email.com
      </p>

      <section className="section">
        <h2>Education</h2>
        <h3>Master of Science in Computer Science</h3>
        <p>University of XYZ, Anytown USA | May 2023</p>
        <p>GPA: 3.9/4.0</p>

        <h3>Bachelor of Science in Computer Science</h3>
        <p>University of ABC, Anytown USA | May 2021</p>
        <p>GPA: 3.7/4.0</p>
      </section>

      <section className="section">
        <h2>Skills</h2>
        <p>
          Programming languages: Java, Python, JavaScript, C++
          <br />
          Frameworks and libraries: React, Spring Boot, Django, Node.js, Express.js
          <br />
          Database systems: MySQL, MongoDB
          <br />
          Operating systems: Windows, Linux
          <br />
          Version control: Git
        </p>
      </section>

      <section className="section">
        <h2>Work Experience</h2>

        <h3>Software Development Intern</h3>
        <p>XYZ Corporation, Anytown USA | May 2022 – August 2022</p>
        <ul>
          <li>Developed a new web application using React and Node.js</li>
          <li>Collaborated on design and feature implementation</li>
          <li>Debugged and fixed codebase issues</li>
        </ul>

        <h3>Teaching Assistant</h3>
        <p>Department of Computer Science, University of XYZ | August 2021 – Present</p>
        <ul>
          <li>Assisted with grading and office hours</li>
          <li>Helped students with assignments and course questions</li>
        </ul>
      </section>

      <section className="section">
        <h2>Projects</h2>

        <h3>Personal Website</h3>
        <p>
          Built a personal website using React and deployed it on GitHub Pages
          <br />
          Source code:{" "}
          <a
            href="https://github.com/studentname/personal-website"
            target="_blank"
            rel="noreferrer"
          >
            github.com/studentname/personal-website
          </a>
        </p>

        <h3>Online Bookstore</h3>
        <p>
          Developed a web application for an online bookstore using Spring Boot and MySQL
          <br />
          Source code:{" "}
          <a
            href="https://github.com/studentname/online-bookstore"
            target="_blank"
            rel="noreferrer"
          >
            github.com/studentname/online-bookstore
          </a>
        </p>
      </section>
    </div>
  );
}

export default Resume;
