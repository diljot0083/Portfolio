
import "../about/About.css"
const About = () => {
  return (
    <div className="about-container">
      <section className="about-me">
        <h1>So, Who Am I?</h1>
        <p>
          Hey, I'm Diljot Singh, Aspiring Software Developer with a strong foundation in <strong>C++, MERN stack, and Data Structures.</strong> Passionate about developing
          efficient, scalable software solutions and solving complex problems. Experienced in designing and implementing full-stack
          applications, optimizing algorithms, and enhancing user experiences through robust web and software development.
        </p>
      </section>

      <section className="about-me-skills">
        <h2>My Skills</h2>
        <ul className="skills-list">
          <li><strong>Languages:</strong> C, C++, Python, JavaScript, TypeScript</li>
          <li><strong>Web Technologies:</strong> HTML, CSS, MERN Stack</li>
          <li><strong>Databases:</strong> MySQL, MongoDB</li>
          <li><strong>Tools:</strong> Git, Postman</li>
        </ul>
      </section>
    </div>
  );
};

export default About;
