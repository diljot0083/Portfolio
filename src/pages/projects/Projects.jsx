const Projects = () => {
    return (
        <div
            className="ml-40 mr-40 mt-15 mb-20 pt-5 pb-5"
            style={{ fontFamily: '"Times New Roman", Times, serif' }}
        >
            {/* Review Flicks Project */}
            <div className="w-auto h-75 bg-[#F3E8FF] mb-20 p-5 rounded-xl">
                <p className="text-2xl font-bold mb-3">Review Flicks</p>

                <p>
                    ReviewFlicks is a dynamic and interactive movie review platform built using the MERN
                    stack (MongoDB, Express, React, Node). Users can explore movies, submit reviews, and read what others think — all in one place.
                </p>

                <p className="mt-3 text-xl font-semibold">TechStack Used:</p>
                <p>MongoDB, Express, React, Node</p>
                <br />

                <a
                    href="https://reviewflicks.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-black text-white font-semibold py-2 px-4 rounded-xl 
                               transition-transform transform duration-300 hover:scale-110 
                               hover:shadow-2xl hover:drop-shadow-[0_17px_15px_rgba(0,0,0,0.3)]"
                >
                    Live Demo
                </a>

                <a
                    href="https://github.com/diljot0083/ReviewFlicks"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-gray-800 text-white font-semibold py-2 px-4 rounded-xl ml-4
                               transition-transform transform duration-300 hover:scale-110 
                               hover:shadow-2xl hover:drop-shadow-[0_17px_15px_rgba(0,0,0,0.3)]"
                >
                    GitHub
                </a>
            </div>

            {/* To-Do List Project */}
            <div className="w-auto h-75 bg-[#F3E8FF] p-5 rounded-xl">
                <p className="text-2xl font-bold mb-3">To-Do List</p>

                <p>
                    A console-based To-Do List application developed in C++ to manage daily tasks efficiently. The program allows users to add, view, mark as complete, and delete tasks using a simple and interactive menu-driven interface.
                </p>

                <p className="mt-3 text-xl font-semibold">TechStack Used:</p>
                <p>C++, OOP, File Handling</p>
                <br />

                <a
                    href="https://github.com/diljot0083/To-Do-List-CPP"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-gray-800 text-white font-semibold py-2 px-4 rounded-xl 
                               transition-transform transform duration-300 hover:scale-110 
                               hover:shadow-2xl hover:drop-shadow-[0_17px_15px_rgba(0,0,0,0.3)]"
                >
                    GitHub
                </a>
            </div>
        </div>
    );
};

export default Projects;
