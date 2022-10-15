import { Link } from "react-router-dom";

const More = (props) => {
    return (
        <div className="text-right mt-8">
            <Link to={props.link} className="bg-[#1a1a1a] text-white px-4 py-2 rounded-md hover:bg-[#2a2a2a]
            
            ">More</Link>
        </div>
    );
}

export default More;

