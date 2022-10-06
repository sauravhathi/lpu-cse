import { Link } from 'react-router-dom';
import BackBtn from './BackBtn';
const Home = () => {
    return (
        <div className="bg-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg shadow-lg p-4 h-screen w-screen text-center">
                    <h1 className="text-2xl font-bold">Lovely Professional University</h1>
                    <Link to="/lpu/blog" className="text-blue-500">Blog</Link>
                </div>
            </div>
        </div>

    );
}
export default Home;
