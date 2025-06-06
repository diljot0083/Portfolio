import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import Typing from '../../components/typing/Typing';
import Editor from '../../components/editor/Editor';
import Powered from '../../components/powered/Powered';

const Landing = () => {
    return (
        <div className="landing-page bg-white min-h-screen ">
            <Navbar />

            <div className="flex flex-col md:flex-row justify-between items-center px-12 pt-13 pb-8">
                <div className="max-w-xl">
                    <h1 className="text-4xl font-bold mb-9" style={{ fontFamily: '"Times New Roman", Times, serif', fontSize: "3.8rem" }}>
                        <Typing message="A Developer’s Mind,
An Innovator’s Vision" />
                    </h1>
                    <h3 className="text-3xl font-semibold text-black mb-2 pt-5" style={{ fontFamily: '"Times New Roman", Times, serif' }}>Hey There! I’m</h3>
                    <h1 className="text-xl font-semibold mb-6" style={{ fontFamily: '"Times New Roman", Times, serif' }}>
                        Diljot Singh – A Developer Passionate About Innovation
                    </h1>

                    <div className="flex gap-4">
                        <Link to="/home">
                            <button className="bg-black text-white px-6 py-2 rounded-2xl shadow-md transition transform duration-300 hover:scale-110 hover:shadow-2xl hover:drop-shadow-[0_17px_15px_rgba(0,0,0,0.3)] ">
                                Visit Portfolio
                            </button>
                        </Link>
                        <Link to="/projects">
                            <button className="border border-black px-6 py-2 rounded-2xl transition transform duration-300 hover:scale-110 hover:shadow-2xl hover:drop-shadow-[0_17px_15px_rgba(0,0,0,0.3)]">
                                View Projects
                            </button>
                        </Link>
                    </div>
                </div>

                <div>
                    <Editor />
                </div>

            </div>

            {/* <div className="md:justify-items-end absolute top-35 right-0 alignitems-center">
                    <Editor />
                </div> */}

        </div>
    );
};

export default Landing;
