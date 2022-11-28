import React, { useState } from "react";
import { Link } from "react-router-dom";
import BackBtn, { IsHome, More } from "./InBuild";

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

        <div className={`
        flex flex-col pr-4 pl-4 lg:pl-20 lg:pr-20 mt-5 mb-5 ${IsHome ? "" : ""}
        `}>
            <div>
                <h1 className={`text-3xl font-bold text-slate-800`}
                    onMouseEnter={toggleHover}
                >Roadmaps</h1>

                <span className={`bg-gradient-to-l from-slate-200 to-pink-500  h-1 mt-2 mb-4 block
                ${hover ? "w-28" : "w-16"}`}></span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {roadmaps.map((roadmap, i) => {
                    return (
                        <div key={i} className="bg-white rounded-lg shadow-lg p-4">
                            <div className="flex flex-row justify-between">
                                <div className="flex flex-row">
                                    <div className="flex flex-col justify-center">
                                        <span className="text-2xl">
                                            <i className={`ri-${roadmap.icon} text-slate-800`}></i>
                                        </span>
                                        <span className="text-slate-800 font-bold text-lg ml-2">{roadmap.language}</span>
                                        <span className="text-slate-800 text-sm ml-2">{roadmap.roadmaps.length} Roadmaps</span>
                                        <span className="text-slate-800 text-sm ml-2">Last Updated: {currentDate.toDateString()}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between">
                                <div className="flex flex-col justify-center">
                                    <span className="text-slate-800 text-sm">Created by Saurav</span>
                                    <span className="text-slate-800 text-sm">Updated by Saurav</span>
                                </div>
                                <div className="flex items-end">
                                    <Link to="/roadmaps/javascript" className="text-slate-800 text-sm font-bold">View</Link>
                                </div>
                            </div>
                        </div>
                    )
                }
                )}
            </div>
            <div className="flex flex-wrap justify-between mt-4">
                <BackBtn />
                {IsHome() ? <More link="/roadmaps" /> : ""}
            </div>
        </div>

    );
}

export default Roadmaps;