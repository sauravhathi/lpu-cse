import React, { useState } from "react";
import { IoLogoJavascript, IoLogoPython } from "react-icons/io";
import { SiJava } from "react-icons/si";
import { GrCode } from "react-icons/gr";
import BackBtn, {IsHome, More} from "./InBuild";

const Projects = () => {

    const projects = [
        {
            language: "javascript",
            icon: "IoLogoJavascript",
            projects: [
                {
                    id: 1,
                    title: "BMI Calculator",
                    link: "https://github.com/sauravhathi/bmi-calculator"
                },
                {
                    id: 2,
                    title: "Hidden and Seek Gifts Game",
                    link: "https://github.com/sauravhathi/hide-and-seek-gifts"
                },
                {
                    id: 3,
                    title: "CPU scheduling algorithms",
                    link: "https://github.com/sauravhathi/cpu-scheduling-algorithms"
                },
                {
                    id: 4,
                    title: "Weather Forecast App",
                    link: "https://github.com/sauravhathi/Weather-Forecast-App",
                }
            ]
        },
        {
            language: "Python",
            icon: "IoLogoPython",
            projects: [
                {
                    id: 1,
                    title: "Auto Typer",
                    link: "https://github.com/sauravhathi/autotyper"
                },
                {
                    id: 2,
                    title: "Handwritten Digit Recognition GUI",
                    link: "https://github.com/sauravhathi/Handwritten-Digit-Recognition-GUI"
                },
                {
                    id: 3,
                    title: "Disease Prediction",
                    link: "https://github.com/sauravhathi/projects/tree/master/Disease%20Prediction"
                }
            ]
        },
        {
            language: "C++",
            icon: "GrCode",
            projects: [
                {
                    id: 1,
                    title: "Project 1",
                    link: "/project-1"
                },
                {
                    id: 2,
                    title: "Project 2",
                    link: "/project-2"
                },
                {
                    id: 3,
                    title: "Project 3",
                    link: "/project-3"
                }
            ]
        },
        {
            language: "Java",
            icon: "SiJava",
            projects: [
                {
                    id: 1,
                    title: "Reward Calculation GUI",
                    link: "https://github.com/sauravhathi/Reward-Calculation-Java-GUI-Project"
                },
                {
                    id: 2,
                    title: "Bank Transfer Message GUI",
                    link: "https://github.com/sauravhathi/BankTransferMessage-Java-GUI-Project"
                },
                {
                    id: 3,
                    title: "AirFare GUI",
                    link: "https://github.com/sauravhathi/AirFare-Java-GUI-Project"
                }
            ]
        },
        {
            language: "Python",
            icon: "IoLogoPython",
            projects: [
                {
                    id: 1,
                    title: "Auto Typer",
                    link: "https://github.com/sauravhathi/autotyper"
                },
                {
                    id: 2,
                    title: "Handwritten Digit Recognition GUI",
                    link: "https://github.com/sauravhathi/Handwritten-Digit-Recognition-GUI"
                },
                {
                    id: 3,
                    title: "Disease Prediction",
                    link: "https://github.com/sauravhathi/projects/tree/master/Disease%20Prediction"
                }
            ]
        },
        {
            language: "javascript",
            icon: "IoLogoJavascript",
            projects: [
                {
                    id: 1,
                    title: "BMI Calculator",
                    link: "https://github.com/sauravhathi/bmi-calculator"
                },
                {
                    id: 2,
                    title: "Hidden and Seek Gifts Game",
                    link: "https://github.com/sauravhathi/hide-and-seek-gifts"
                },
                {
                    id: 3,
                    title: "CPU scheduling algorithms",
                    link: "https://github.com/sauravhathi/cpu-scheduling-algorithms"
                },
                {
                    id: 4,
                    title: "Weather Forecast App",
                    link: "https://github.com/sauravhathi/Weather-Forecast-App",
                }
            ]
        },
    ];


    const [hover, setHover] = useState(false);

    const toggleHover = () => {
        setHover(!hover);
    };

    return (
        <>
            <div className={`
        flex flex-col pr-4 pl-4 lg:pl-20 lg:pr-20 mt-5 mb-5 ${IsHome ? "xl:h-screen" : ""}
        `}>
                <div>
                    <h1 className={`text-3xl font-bold text-slate-800`}
                        onMouseOver={toggleHover}
                    >Projects</h1>

                    <span className={`bg-gradient-to-l from-slate-200 to-pink-500  h-1 mt-2 mb-4 block
                ${hover ? "w-28" : "w-16"}`}></span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                    {projects.map((project) => {
                        return (
                            <div className="bg-white shadow-md rounded-md p-4">
                                <h1 className="text-xl font-bold text-slate-800 capitalize">{project.language} {project.icon === "IoLogoJavascript" ? <IoLogoJavascript className="inline
                            bg-pink-600 text-white rounded-full p-1" /> : project.icon === "IoLogoPython" ? <IoLogoPython className="inline
                            bg-pink-600 text-white rounded-full p-1" /> : project.icon === "SiJava" ? <SiJava className="inline
                            bg-pink-600 text-white rounded-full p-1" /> : <GrCode className="inline
                            bg-pink-600 text-white rounded-full p-1" />}</h1>


                                <ul className="mt-4  text-slate-800 text-md">
                                    {project.projects.map((project) => {
                                        return (
                                            <li className="mb-2 list-decimal
                                        ml-4
                                        ">
                                                <a href={project.link} className="hover:text-pink-500">{project.title}</a>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        );
                    })}
                </div>
                <More link="" />
                <BackBtn />

            </div>
        </>
    );
};

export default Projects;