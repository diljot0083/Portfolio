const About = () => {
  return (
    <div
      className="md:mx-5 md:my-9 mx-2 my-7 px-2 text-base text-[#141414]"
      style={{ fontFamily: '"Times New Roman", Times, serif' }}
    >
      {/* About Me Section */}
      <section className="">
        <h1 className="md:text-[60.8px] text-4xl font-bold leading-tight">So, Who Am I?</h1>
        <p className="md:my-4 my-3 text-base md:text-lg">
          Hey, I'm Diljot Singh, Aspiring Software Developer with a strong foundation in{" "}
          <strong>C++, MERN stack, and Data Structures.</strong> Passionate about developing efficient, scalable
          software solutions and solving complex problems. Experienced in designing and implementing full-stack
          applications, optimizing algorithms, and enhancing user experiences through robust web and software
          development.
        </p>
      </section>

      {/* Skills Section */}
      <section>
        <h2 className="text-2xl md:text-4xl font-bold mt-2">My Skills</h2>
        <div className="text-base md:my-2 md:text-lg md:space-y-1">
          <p><strong>Languages:</strong> C, C++, Python, JavaScript, TypeScript</p>
          <p><strong>Web Technologies:</strong> HTML, CSS, MERN Stack</p>
          <p><strong>Databases:</strong> MySQL, MongoDB</p>
          <p><strong>Tools:</strong> Git, Postman</p>
        </div>
      </section>
    </div>
  );
};

export default About;
