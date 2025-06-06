import React from 'react';
import Typing from '../typing/Typing';

const Editor = () => {
  return (
    <div className="w-full h-85 md:w-142 mr-15 mt-5 pl-6 pt-8.5 pb-8 pr-6 bg-[#F3E8FF] font-mono text-[#1E293B] shadow-2xl box-border size-32 rounded-xl " style={{
      animation: 'float 2s ease-in-out infinite'
    }}>

      {/* <div className="w-full h-90 md:w-120 bg-[#F3E8FF] font-mono text-[#1E293B] shadow-2xl box-border size-32 mr-25 mt-5 pl-6 pt-6 pb-5 pr-6 rounded-xl " style={{
    animation: 'float 2s ease-in-out infinite'
  }}></div> */}

      <Typing message={`#include <iostream>
using namespace std;

int main() {
    string name = "Diljot Singh";
    string role = "Aspiring Software Developer";
    string skills[] = {"C", "C++", "Python", "MERN Stack"};

    cout << "Hello, I'm " << name << ", " << role << endl;
    return 0;
}`} />
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