import React from 'react';
import {useNavigate} from 'react-router-dom';

const BackBtn = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(-1);
    }
    return (
        <div className="grid grid-cols-1 justify-items-start">
            <button onClick={handleClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Back</button>
        </div>
    );
}

export default BackBtn;
