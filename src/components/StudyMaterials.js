import React, { useState } from "react";
import { Link } from "react-router-dom";
import BackBtn, {More} from "./InBuild";

const StudyMaterials = () => {


    const [hover, setHover] = useState(false);

    const toggleHover = () => {
        setHover(!hover);
    };

    const studyMaterials = [
        {
            subject: "Programming Languages",
            subSubjects: [
                {
                    id: 1,
                    title: "C",
                    link: "https://github.com/sauravhathi/lpu-cse/tree/master/Subjects/cse101"
                },
                {
                    id: 2,
                    title: "C++",
                    link: "/study-materials/c++"
                },
                {
                    id: 3,
                    title: "Java",
                    link: "https://github.com/sauravhathi/CSE310"
                },
                {
                    id: 4,
                    title: "Python",
                    link: "https://github.com/sauravhathi/lpu-cse/tree/master/Subjects/int213"
                },
                {
                    id: 5,
                    title: "Javascript",
                    link: "https://github.com/sauravhathi?tab=repositories"
                },
                {
                    id: 6,
                    title: "Kotlin",
                    link: "https://kotlinlang.org/docs/home.html"
                },
            ]
        },
        {
            subject: "Data Structures and Algorithms",
            subSubjects: [
                {
                    id: 1,
                    title: "CSE205 - Data Structures and Algorithms",
                    link: "https://github.com/sauravhathi/lpu-cse/tree/master/Subjects/CSE205%20-%20DATA%20STRUCTURES%20AND%20ALGORITHMS"
                },
                {
                    id: 2,
                    title: "Algorithms",
                    link: "/study-materials/algorithms"
                }
            ]
        },
        {
            subject: "Operating Systems",
            subSubjects: [
                {
                    id: 1,
                    title: "Operating Systems",
                    link: "/study-materials/operating-systems"
                }
            ]
        },
        {
            subject: "Mathematics",
            subSubjects: [
                {
                    id: 1,
                    title: "Math165",
                    link: "https://github.com/sauravhathi/lpu-cse/tree/master/Subjects/math165"
                },
                {
                    id: 2,
                    title: "Math166",
                    link: "https://github.com/sauravhathi/lpu-cse/tree/master/Subjects/math166",
                },
                {
                    id: 3,
                    title: "Math302",
                    link: "https://github.com/sauravhathi/lpu-cse/tree/master/Subjects/math302",
                },
                {
                    id: 4,
                    title: "Math401",
                    link: "https://github.com/sauravhathi/lpu-cse/tree/master/Subjects/math401",
                },
            ]
        },
        {
            subject: "Computer Networks",
            subSubjects: [
                {
                    id: 1,
                    title: "Computer Networks",
                    link: "/study-materials/computer-networks"
                }
            ]
        },
        {
            subject: "Databases",
            subSubjects: [
                {
                    id: 1,
                    title: "INT306 - Database Management Systems",
                    link: "https://github.com/sauravhathi/lpu-cse/tree/master/Subjects/INT306%20-%20DATABASE%20MANAGEMENT%20SYSTEMS"
                }
            ]
        },
        {
            subject: "Software Engineering",
            subSubjects: [
                {
                    id: 1,
                    title: "Software Engineering",
                    link: "https://github.com/sauravhathi/CSE320"
                },
                {
                    id: 2,
                    title: "Fundamentals of Devops",
                    link: "https://github.com/sauravhathi/lpu-cse/tree/master/Subjects/INT331%20-%20FUNDAMENTALS%20OF%20DEVOPS"
                }
            ]
        },
        {
            subject: "Computer Architecture",
            subSubjects: [
                {
                    id: 1,
                    title: "Computer Architecture",
                    link: "https://github.com/sauravhathi/lpu-cse/tree/master/Subjects/cse211"
                }
            ]
        },
        {
            subject: "Computer Graphics",
            subSubjects: [
                {
                    id: 1,
                    title: "Computer Graphics",
                    link: "/study-materials/computer-graphics"
                }
            ]
        },
        {
            subject: "Artificial Intelligence",
            subSubjects: [
                {
                    id: 1,
                    title: "Artificial Intelligence",
                    link: "https://github.com/sauravhathi/lpu-cse/tree/master/Subjects/int404"
                }
            ]
        },
        {
            subject: "Machine Learning",
            subSubjects: [
                {
                    id: 1,
                    title: "Machine Learning",
                    link: "/study-materials/machine-learning"
                }
            ]
        },
        {
            subject: "Data Science",
            subSubjects: [
                {
                    id: 1,
                    title: "Excel",
                    link: "/study-materials/excel"
                },
                {
                    id: 2,
                    title: "R Programming",
                    link: "/study-materials/r-programming"
                },
                {
                    id: 3,
                    title: "Python",
                    link: "/study-materials/python"
                },
                {
                    id: 4,
                    title: "SQL",
                    link: "/study-materials/sql"
                },
                {
                    id: 5,
                    title: "Tableau",
                    link: "/study-materials/tableau"
                },
                {
                    id: 6,
                    title: "Power BI",
                    link: "/study-materials/power-bi"
                },
            ]
        },
        {
            subject: "Cyber Security",
            subSubjects: [
                {
                    id: 1,
                    title: "Cyber Security",
                    link: "/study-materials/cyber-security"
                }
            ]
        },
        {
            subject: "Blockchain",
            subSubjects: [
                {
                    id: 1,
                    title: "Blockchain",
                    link: "/study-materials/blockchain"
                }
            ]
        },
        {
            subject: "Cloud Computing",
            subSubjects: [
                {
                    id: 1,
                    title: "Cloud Computing",
                    link: "/study-materials/cloud-computing"
                }
            ]
        },
        {
            subject: "Internet of Things",
            subSubjects: [
                {
                    id: 1,
                    title: "Internet of Things",
                    link: "/study-materials/internet-of-things"
                }
            ]
        },
        {
            subject: "Big Data",
            subSubjects: [
                {
                    id: 1,
                    title: "Big Data",
                    link: "/study-materials/big-data"
                }
            ]
        },
        {
            subject: "Game Development",
            subSubjects: [
                {
                    id: 1,
                    title: "Game Development",
                    link: "/study-materials/game-development"
                }
            ]
        },
        {
            subject: "Mobile Development",
            subSubjects: [
                {
                    id: 1,
                    title: "Mobile Development",
                    link: "/study-materials/mobile-development"
                }
            ]
        },
        {
            subject: "Web Development",
            subSubjects: [
                {
                    id: 1,
                    title: "INT219 - Front End Web Developer",
                    link: "https://github.com/sauravhathi/lpu-cse/tree/master/Subjects/INT219%20-%20Front%20End%20Web%20Developer"
                },
                {
                    id: 2,
                    title: "INT359 - Front End Development II",
                    link: "https://github.com/sauravhathi/lpu-cse/tree/master/Subjects/INT359%20-%20Front%20End%20Development%20II"
                }
            ]
        },
        {
            subject: "Backend Development",
            subSubjects: [
                {   
                    id: 1,
                    title: "INT358 - Backend Development I",
                    link: "https://github.com/sauravhathi/lpu-cse/tree/master/Subjects/INT358%20-%20Backend%20Development%20I"
                }
            ]

        },
        {
            subject: "DevOps",
            subSubjects: [
                {
                    id: 1,
                    title: "Git",
                    link: "/study-materials/git"
                },
                {
                    id: 2,
                    title: "Docker",
                    link: "/study-materials/docker"
                },
                {
                    id: 3,
                    title: "Kubernetes",
                    link: "/study-materials/kubernetes"
                },
                {
                    id: 4,
                    title: "Jenkins",
                    link: "/study-materials/jenkins"
                },
                {
                    id: 5,
                    title: "Ansible",
                    link: "/study-materials/ansible"
                },
                {
                    id: 6,
                    title: "AWS",
                    link: "/study-materials/aws"
                },
                {
                    id: 7,
                    title: "Azure",
                    link: "/study-materials/azure"
                }
            ]
        },
        {
            subject: "Interview Preparation",
            subSubjects: [
                {
                    id: 1,
                    title: "Interview Preparation",
                    link: "/study-materials/interview-preparation"
                }
            ]
        },
        {
            subject: "Competitive Programming",
            subSubjects: [
                {
                    id: 1,
                    title: "Competitive Programming",
                    link: "/study-materials/competitive-programming"
                }
            ]
        },
    ]



    return (
        <div className="flex flex-col justify-center pr-4 pl-4 lg:pl-20 lg:pr-20 mt-5 mb-5">
            <div>
                <h1 className={`text-3xl font-bold text-slate-800`}
                    onMouseOver={toggleHover}
                >Study Materials</h1>

                <span className={`bg-gradient-to-l from-slate-200 to-pink-500  h-1 mt-2 mb-4 block
            ${hover ? "w-28" : "w-16"}`}></span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                {studyMaterials.map((item, index) => (
                    <div key={index} className="bg-white rounded-md shadow-md p-4">
                        <h1 className="text-xl font-bold text-slate-800">{item.subject}</h1>
                        <ul className="mt-4">
                            {item.subSubjects.map((subItem, subIndex) => (
                                <a href={subItem.link} key={subIndex} className="hover:bg-slate-100 rounded-md p-2 block">
                                    <li className="text-slate-800 list-decimal list-inside">
                                        {subItem.title}
                                    </li>
                                </a>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <More link="" />
            <BackBtn />
        </div>
    );
};

export default StudyMaterials;