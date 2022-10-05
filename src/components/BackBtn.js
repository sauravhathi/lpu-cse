import React from 'react';
import {useNavigate, useLocation} from 'react-router-dom';

const BackBtn = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const handleClick = () => {
        navigate(-1);
    }
    return (
        <div>
            <button onClick={handleClick}>Back</button>
        </div>
    );
}

export default BackBtn;
