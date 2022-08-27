import { Link } from 'react-router-dom';
import land from './land.png';
import background from './background.svg';

const Hero = () => {
    return(
        <div className="flex justify-center items-center px-64 h-screen overflow-hidden bg-cover bg-[url('Estate/src/components/background.svg')]">
            <div className="flex flex-col justify-center items-start w-1/2 pl-8 ">
                <div className="text-white text-left text-9xl my-10">&#400;state</div>
                <div className="text-white text-3xl mb-10">Your one stop solution to Buy & Sell Real Estate NFTs.</div>
                <div className="text-white text-xl">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam magnam aperiam fugit, tempora error, veritatis eaque at, alias necessitatibus laudantium numquam est odit a libero? Eligendi non ab voluptates similique.</div>
                <div className="flex justify-center items-center text-lg text-black my-20">
                    <div className='btn border text-black border-white rounded-full bg-white drop-shadow-2xl mx-5 px-2 py-2'>
                        <Link to="/marketplace">Checkout Properties</Link>
                    </div>
                    <div className="btn border text-black border-white rounded-full bg-white drop-shadow-2xl mx-5 px-2 py-2">
                        <Link to="/marketplace">Connect to your Wallet</Link>
                    </div>
                </div>
            </div>
            <div className="w-1/2 pb-36">
                    <img src={land} alt="land"/>
            </div>
        </div>    
    );
}

export default Hero;