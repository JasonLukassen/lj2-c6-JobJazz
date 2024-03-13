import { Link } from 'react-router-dom';
import backgroundImage from '../../assets/LoginImage.png';

export default function Register() {

    return (
        <div>
            <div className='hidden lg:block'>
                <img src={backgroundImage} alt="img" className="w-2/5 h-screen max-h-screen"/>
            </div>
            <div className='flex justify-center items-center'>
                <h1 className='text-2xl text-blue-500'>Register</h1>
                <form action="/Register">
                    <label><input type="text" /></label>
                </form>
            </div>
        </div>
    )
} 