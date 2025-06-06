import React from 'react';
import Typing from '../../components/typing/Typing';

function Home() {
  return (
    <div className="flex flex-col md:flex-row mt-5" style={{ fontFamily: '"Times New Roman", Times, serif' }}>

      <div className="w-full md:w-1/2 px-12 pt-12 pb-8">
        <p className="text-2xl font-bold">Hey, I'm</p>
        <h1 className="text-4xl font-bold mb-6" style={{ fontSize: "3.8rem" }}>
          <Typing message="Diljot Singh" />
        </h1>
        <p className="text-lg">
          A passionate developer with a strong foundation in C++ and practical experience building projects using the MERN stack. I enjoy turning ideas into responsive, full-stack applications and continuously strive to improve my problem-solving and development skills.
        </p>


      </div>

    </div>
  );
}

export default Home;
