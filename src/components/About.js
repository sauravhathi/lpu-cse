import BackBtn from "./BackBtn";
import {IoLogoGithub, IoLogoLinkedin} from 'react-icons/io';
const About = () => {

    const contributors = [
        {
            profile: "https://avatars.githubusercontent.com/u/61316762?v=4",
            name: "Saurav Hathi",
            github: "",
            linkedin: "",
        },
        {
            profile: "https://avatars.githubusercontent.com/u/61316762?v=4",
            name: "Saurav Hathi",
            github: "",
            linkedin: "",
        },
        {
            profile: "https://avatars.githubusercontent.com/u/61316762?v=4",
            name: "Saurav Hathi",
            github: "",
            linkedin: "",
        },
        {
            profile: "https://avatars.githubusercontent.com/u/61316762?v=4",
            name: "Saurav Hathi",
            github: "",
            linkedin: "",
        },
        {
            profile: "https://avatars.githubusercontent.com/u/61316762?v=4",
            name: "Saurav Hathi",
            github: "",
            linkedin: "",
        },
        {
            profile: "https://avatars.githubusercontent.com/u/61316762?v=4",
            name: "Saurav Hathi",
            github: "",
            linkedin: "",
        },
    ];

    return (
        <div className="flex flex-col justify-center pr-4 pl-4 lg:pl-20 lg:pr-20 mt-5 mb-5">
            <div>
                <h1 className="text-4xl font-bold text-left">About</h1>
                <p className="text-xl text-center mt-5">
                    This is a project made by student of <a href="https://www.lpu.in/" className="text-blue-500">Lovely Professional University</a>.
                </p>
                <p className="text-xl text-center mt-5">
                    This project is made using <a href="https://reactjs.org/" className="text-blue-500">React</a> and <a href="https://tailwindcss.com/" className="text-blue-500">TailwindCSS</a>.
                </p>
                <p className="text-xl text-center mt-5">
                    This project is open source and you can contribute to it by clicking <a href="https://github.com/sauravhathi/lpu-cse" className="text-blue-500">here</a>.
                </p>
                <p className="text-xl text-center mt-5">
                    This project is made by the following contributors:
                </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-5">
                {contributors.map((contributor) => (
                    <div className="flex flex-col items-center justify-center m-5 rounded-lg p-5 shadow-lg hover:mb-10">
                        <img src={contributor.profile} className="rounded-full h-32 w-32" alt="profile" />
                        <p className="text-xl text-center mt-5">{contributor.name}</p>
                        <div className="flex flex-row justify-center mt-5">
                            <a href={contributor.github} className="text-2xl mr-5"><IoLogoGithub /></a>
                            <a href={contributor.linkedin} className="text-2xl"><IoLogoLinkedin /></a>
                        </div>
                    </div>
                ))}
            </div>
            <BackBtn />
        </div>
    );
}

export default About;