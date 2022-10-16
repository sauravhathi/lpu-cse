import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
const BackBtn = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(-1);
    }
    return (
        <>    {
                window.location.href === "https://sauravhathi.github.io/lpu-cse/" || window.location.href === "https://sauravhathi.github.io/lpu-cse/#/" || window.location.href === "https://sauravhathi.github.io/lpu-cse" || window.location.href === "https://sauravhathi.github.io/lpu-cse/#/" || window.location.href === "https://sauravhathi.github.io/lpu-cse/#" || window.location.href === "http://localhost:3000/lpu-cse#/" || window.location.href === "http://localhost:3000/lpu-cse" || window.location.href === "http://localhost:3000/lpu-cse/#/" || window.location.href === "http://localhost:3000/lpu-cse/#" ? "" :
                    <div className="grid grid-cols-1 justify-items-start">
                        <button onClick={handleClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Back</button>
                    </div>
            }

        </>
    );
}

export default BackBtn;

export const IsHome = () => {
    
        const isHome = window.location.href === "http://localhost:3000/lpu-cse#/" || window.location.href === "http://localhost:3000/lpu-cse" || window.location.href === "http://localhost:3000/lpu-cse/#/" || window.location.href === "http://localhost:3000/lpu-cse/#" || window.location.href === "https://sauravhathi.github.io/lpu-cse/" || window.location.href === "https://sauravhathi.github.io/lpu-cse/#/" || window.location.href === "https://sauravhathi.github.io/lpu-cse" || window.location.href === "https://sauravhathi.github.io/lpu-cse/#/" || window.location.href === "https://sauravhathi.github.io/lpu-cse/#" ? true : false;
    
        return isHome;
        
}

export const More = (props) => {
    return (
        <div className="text-right mt-8">
            <Link to={props.link} className="bg-[#1a1a1a] text-white px-4 py-2 rounded-md hover:bg-[#2a2a2a]
            
            ">More</Link>
        </div>
    );
}

