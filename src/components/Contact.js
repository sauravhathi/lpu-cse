import {Link} from 'react-router-dom';
const Contact = () => {
    return (
        <div className="flex flex-col justify-center pr-4 pl-4 lg:pl-20 lg:pr-20 mt-5 mb-5">
            <div>
                <h1 className="text-4xl font-bold text-left">Contact</h1>
                <p className="text-xl text-center mt-5">
                    You can contact us by clicking <a href="https://github.com/sauravhathi/" className="text-blue-500">here</a>.
                </p>
                <p className="text-xl text-center mt-5">
                    You can also contact us by clicking <a href="https://t.me/sauravhathi_yt_discussion" className="text-blue-500">here</a>.
                </p>
            </div>
        </div>
    );
}

export default Contact;