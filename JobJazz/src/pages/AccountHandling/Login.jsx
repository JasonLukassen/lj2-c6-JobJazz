import { Link } from 'react-router-dom';
import backgroundImage from '../../assets/LoginImage.png';

export default function Login() {

    return (
        <div className='flex flex-row w-full box-border'>
            <div className='hidden lg:block lg:w-1/3 lg:min-w-[500px]'>
                <img src={backgroundImage} alt="img" className="w-full h-screen max-h-screen"/>
            </div>
            <div className='lg:flex justify-center items-center w-full'>
                <h1 className='text-4xl'>Login</h1>
                <form action="/Register">
                    <label><input type="text" /></label>
                </form>
                <Link to="/register">Register</Link>
            </div>
        </div>

    )
}