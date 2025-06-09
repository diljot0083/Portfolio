import React from 'react';
import Typing from '../typing/Typing';

const Editor = () => {
  return (
    <div
      className="w-[90vw] max-w-[500px] h-[320px] md:w-[570px] md:h-[320px] md:mr-20 mt-7 px-5 py-5 bg-[#F3E8FF] font-mono text-[#1E293B] shadow-2xl box-border rounded-xl"
      style={{ animation: 'float 2s ease-in-out infinite' }}
    >
      <div className="whitespace-pre-wrap text-xs md:text-sm leading-relaxed break-words">
        <Typing
          message={`#include <iostream>
using namespace std;

int main() {
    string name = "Diljot Singh";
    string role = "Aspiring Software Developer";
    string skills[] = {"C", "C++", "Python", "MERN Stack"};

    cout << "Hello, I'm " << name << ", " << role << endl;
    return 0;
}`}
        />
      </div>

      <style>
        {`
        @keyframes float {
          0%   { transform: translateY(0); }
          50%  { transform: translateY(-20px); }
          100% { transform: translateY(0); }
        }
      `}
      </style>
    </div>
  );
};

export default Editor;