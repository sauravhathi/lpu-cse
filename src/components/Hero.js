import React, { useState } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen -mt-20">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                    <h1 className="text-4xl text-indigo-600 font-bold tracking-wide uppercase">LPU CSE</h1>
                    <p className="mt-2 text-3xl leading-8 font-semibold tracking-tight text-gray-900 sm:text-4xl">
                        Study Materials, Projects, Roadmaps, and more.
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                        This is a collection of study materials, projects and roadmaps for Computer Science Engineering students at Lovely Professional University.  We are a community of students who are passionate about learning and teaching.  We are here to help you learn and grow.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Hero;