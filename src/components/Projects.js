import React, { useState } from "react";
import { IoLogoJavascript, IoLogoPython, IoLogoNodejs } from "react-icons/io";
import { SiJava } from "react-icons/si";
import { GrCode } from "react-icons/gr";
import BackBtn, { IsHome, More } from "./InBuild";

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
                    link: "https://github.com/sauravhathi/Weather-Forecast-App"
                },
                {
                    id: 5,
                    title: "Simple Calculator with Js and TailwindCSS",
                    link: "https://github.com/sauravhathi/simple-calculator-with-js-and-tailwind-css"
                },
                {
                    id: 6,
                    title: "make-notes",
                    link: "https://github.com/sauravhathi/make-notes"
                },
                {
                    id: 7,
                    title: "Tip Calculator",
                    link: "https://github.com/sauravhathi/tip-calculator"
                },
                {
                    id: 8,
                    title: "Grocery List",
                    link: "https://github.com/sauravhathi/grocery-list"
                },
                {
                    id: 9,
                    title: "Weather App",
                    link: "https://github.com/sauravhathi/Weather-Forecast-App"
                },
                {
                    id: 10,
                    title: "Hide and Seek Gifts",
                    link: "https://github.com/sauravhathi/hide-and-seek-gifts"
                },
                {
                    id: 11,
                    title: "CPU Scheduling Algorithms",
                    link: "cpu-scheduling-algorithms"
                },
                {
                    id: 12,
                    title: "Random Color Generator",
                    link: "https://github.com/sauravhathi/random-color-generator"
                },
                {
                    id: 13,
                    title: "Photo Resizer and Compressor",
                    link: "https://github.com/sauravhathi/photo-resizer"
                },
                {
                    id: 14,
                    title: "Password Generator",
                    link: "https://github.com/sauravhathi/password-generator"
                },
                {
                    id: 15,
                    title: "JPG to PNG Converter",
                    link: "https://github.com/sauravhathi/jpg-to-png"
                },
                {
                    id: 16,
                    title: "Image to PDF Converter",
                    link: "https://github.com/sauravhathi/imagetopdf"
                },
                {
                    id: 17,
                    title: "Image to Text Converter",
                    link: "https://github.com/sauravhathi/imageToText"
                },
                {
                    id: 18,
                    title: "Image generator using OpenAI API",
                    link: "https://github.com/sauravhathi/image-generator-using-openai-api"
                },
                {
                    id: 19,
                    title: "Temperature Converter",
                    link: "https://github.com/sauravhathi/temperature-convertor"
                },
                {
                    id: 20,
                    title: "Union and Intersection of two Linked List",
                    link: "https://github.com/sauravhathi/union-and-intersection-of-two-linked-lists"
                },
                {
                    id: 21,
                    title: "Sleeping Barber Simulation",
                    link: "https://github.com/sauravhathi/sleeping-barber"
                },
                {
                    id: 22,
                    title: "Kids Gifts Suggester",
                    link: "https://github.com/sauravhathi/kids-gifts-suggester"
                },
                {
                    id: 23,
                    title: "Employee Management System",
                    link: "https://github.com/sauravhathi/employee-management-system"
                },
                {
                    id: 24,
                    title: "Find Distinct Elements in an Array",
                    link: "https://github.com/sauravhathi/find-matrix-distinct-elements"
                },
                {
                    id: 25,
                    title: "Hides Three Gifts",
                    link: "https://github.com/sauravhathi/hides-three-gifts"
                },
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
            language: "Mern Stack",
            icon: "IoLogoNodejs",
            projects: [
                {
                    id: 1,
                    title: "SignIn and SignUp",
                    link: "https://github.com/sauravhathi/server"
                },
                {
                    id: 2,
                    title: "Project 2",
                    link: "/project-2"
                },
            ]
        }
    ];


    const [hover, setHover] = useState(false);

    const toggleHover = () => {
        setHover(!hover);
    };

    return (
        <>
            <div className={`
        flex flex-col pr-4 pl-4 lg:pl-20 lg:pr-20 mt-5 mb-5}
        `}>
                <div>
                    <h1 className={`text-3xl font-bold text-slate-800`}
                        onMouseEnter={toggleHover}
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
                            bg-pink-600 text-white rounded-full p-1" /> : project.icon === "IoLogoNodejs" ? <IoLogoNodejs className="inline
                            bg-pink-600 text-white rounded-full p-1" /> : <GrCode className="inline
                            bg-pink-600 text-white rounded-full p-1" />}</h1>

                                <ul className="mt-4  text-slate-800 text-md">
                                    {IsHome() ? project.projects.slice(0, 5).map((project) => {
                                        return (
                                            <li className="mb-2 list-decimal
                                        ml-4
                                        ">
                                                <a href={project.link
                                                } className="hover:text-pink-500">{project.title}</a>
                                            </li>
                                        );
                                    }) : project.projects.map((project) => {
                                        return (
                                            <li className="mb-2 list-decimal
                                        ml-4
                                        ">
                                                <a href={project.link
                                                } className="hover:text-pink-500">{project.title}</a>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        );
                    })}
                </div>
                <div className="flex flex-wrap justify-between mt-4">
                    <BackBtn />
                    {IsHome() ? <More link="/projects" /> : ""}
                </div>
            </div>
        </>
    );
};

export default Projects;