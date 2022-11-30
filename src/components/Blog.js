import BackBtn from "./InBuild"
import PostLists from "./PostLists"
const Blog = () => {


    return (
        <div className="flex flex-col justify-center xl:py-4 md:py-2 px-[5%] xl:px-[25%] lg:px-[20%] md:px-[20%]  ">
            <div>
                <PostLists />
            </div>
            <div className="flex flex-wrap justify-between mt-4">
                <BackBtn />
            </div>
        </div>

    );
}

export default Blog;

