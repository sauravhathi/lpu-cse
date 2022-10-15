import React, { useState } from "react";
import { Link } from "react-router-dom";
import More from "./More";
import BackBtn from "./BackBtn";

const Roadmaps = () => {

    const currentDate = new Date();

    const roadmaps = [
        {
            language: "Javascript",
            icon: "IoLogoJavascript",
            roadmaps: [
                {
                    id: 1,
                    title: "Javascript Roadmap",
                    link: "/roadmaps/javascript"
                }
            ]
        },
        {
            language: "Python",
            icon: "IoLogoPython",
            roadmaps: [
                {
                    id: 1,
                    title: "Python Roadmap",
                    link: "/roadmaps/python"
                }
            ]
        },
        {
            language: "Java",
            icon: "SiJava",
            roadmaps: [
                {
                    id: 1,
                    title: "Java Roadmap",
                    link: "/roadmaps/java"
                }
            ]
        }
    ];

    const [hover, setHover] = useState(false);

    const toggleHover = () => {
        setHover(!hover);
    };

    return (
        <div className="flex flex-col justify-center pr-4 pl-4 lg:pl-20 lg:pr-20 mt-5 mb-5 xl:h-screen">
            <div>
                <h1 className={`text-3xl font-bold text-slate-800`}
                    onMouseOver={toggleHover}
                >Roadmaps</h1>

                <span className={`bg-gradient-to-l from-slate-200 to-pink-500  h-1 mt-2 mb-4 block
                ${hover ? "w-28" : "w-16"}`}></span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {roadmaps.map((roadmap) => (
                    <div className="bg-white rounded-lg shadow-lg p-4">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center">
                                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-slate-700">
                                    <roadmap.icon className="text-white text-2xl" />
                                </div>
                                <div className="ml-4">
                                    <h2 className="text-xl font-bold text-slate-800">{roadmap.language}</h2>
                                    <p className="text-sm text-slate-500">{roadmap.roadmaps.length} Roadmaps</p>
                                    <p className="text-sm text-slate-500">Last Updated:
                                        <span className="text-slate-800">{" "} {currentDate.toDateString()}</span>
                                    </p>
                                    <p className="text-sm text-slate-500">Created By: <span className="text-slate-800">
                                        Saura Hathi
                                    </span></p>
                                    <p className="text-sm text-slate-500">Contributors: <span className="text-slate-800">Saura Hathi</span></p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <Link to={roadmap.roadmaps[0].link}>
                                    <button className="bg-gradient-to-r from-pink-500 to-slate-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-slate-500 transition duration-300 ease-in-out">
                                        View
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <More link="" />
            <BackBtn />
        </div>
    );
};

export default Roadmaps;