import { Link } from "react-router-dom";
import BackBtn from "./BackBtn";
const Blog = () => {
    return (
        <div>
            <h1>Blog</h1>
            <Link to="/about">About</Link>
            <BackBtn />
        </div>
    );
}

export default Blog;