import React, {useState} from "react";
import { Link } from "react-router-dom";

const Resources = () => {

    const resources = [
        {
            id: 1,
            title: "Study Materials",
            link: "/study-materials"
        },
        {
            id: 2,
            title: "Projects",
            link: "/projects"
        },
        {
            id: 3,
            title: "Roadmaps",
            link: "/roadmaps"
        }
    ];

    const [hover, setHover] = useState(false);

    const toggleHover = () => {
        setHover(!hover);
    };

    return (
        <div className="flex flex-col justify-center pr-4 pl-4 lg:pl-20 lg:pr-20 mt-5 mb-5 h-screen">
            <div>
                <h1 className={`text-3xl font-bold text-slate-800`}
                onMouseOver={toggleHover}
                >Resources</h1>

                <span className={`bg-gradient-to-l from-slate-200 to-pink-500  h-1 mt-2 mb-4 block
                ${hover ? "w-32" : "w-20"}`}></span>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 gap-4 mt-4 text-center items-center">
                {resources.map((resource) => (
                    <Link to={resource.link} key={resource.id}>
                        <div className="p-20 bg-pink-500 rounded-lg shadow-lg hover:bg-zinc-800 transition duration-300 ease-in-out">
                            <h2 className="text-xl font-bold text-white">
                                {resource.title}
                            </h2>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Resources;