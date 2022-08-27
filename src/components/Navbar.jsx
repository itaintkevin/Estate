import { Link } from 'react-router-dom';
import logo from './images/logo.svg';
import user from './images/user.svg';

const Navbar = () => {
    // const [isActive, setIsActive] = useState(false);
    // const handleLink = () => {
    // setIsActive(current => !current);
    // };

    return(
        <nav>
            <div className="flex justify-between items-center text-white font-medium font-sans px-64 py-10 w-screen">
                <Link className='flex text-3xl list-none' to="/">
                    <li><img className="h-10 w-10" src={logo} alt="logo"/></li>
                    <li className="mx-4">&#400;state</li>
                </Link>
                <div className="flex list-none">
                    <div className=" pointer-events-auto flex items-center text-white text-md font-semibold px-2 py-2 mx-2">
                        <Link to="/marketplace">MARKETPLACE</Link>
                    </div>
                    <div className="pointer-events-auto flex items-center text-white text-md font-semibold px-2 py-2 mx-2" >
                        <Link to="/your-properties">YOUR PROPERTIES</Link>
                    </div>
                </div>
                <ul className=" btn flex items-center text-black text-md font-semibold bg-white border border-white drop-shadow-2xl rounded-full px-2  mx-2" >
                        <li className='mx-2'><Link to="/sell-a-property">CONNECT</Link></li>
                        <li><img className="h-10 w-10" src={user} alt="user"/></li>
                </ul>
            </div>
        </nav>);
}

export default Navbar;
