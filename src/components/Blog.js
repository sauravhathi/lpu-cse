import BackBtn from "./InBuild"
import {Link} from "react-router-dom";
import PostLists from "./PostLists"

const Blog = () => {


    return (
        <div className="flex flex-col justify-center xl:py-4 md:py-2 px-[5%] xl:px-[25%] lg:px-[20%] md:px-[20%]  ">
            <div>
                <PostLists />
            </div>
            <BackBtn />
        </div>

    );
}

export default Blog;

