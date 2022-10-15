import BackBtn from "./BackBtn";
import {Link} from "react-router-dom";
const Blog = () => {


    return (
        <div className="flex flex-col justify-center xl:py-4 md:py-2 px-[5%] xl:px-[25%] lg:px-[20%] md:px-[20%]  ">
            <div>
                <Link to="/post">Click here to go to post</Link>
            </div>
            {/* if home page then back btn else back to home btn */}
            {
                window.location.pathname === "/lpu-cse" ? "" : <BackBtn />
            }
        </div>

    );
}

export default Blog;

