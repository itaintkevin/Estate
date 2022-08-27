import property1 from './images/property1.jpg';
import bed from './images/bed.svg';
import bathtub from './images/bathtub.svg';
import room from './images/room.svg';
import heart from './images/heart.svg';
import eth from './images/eth.png';

export default function Modal({visible, onClose}) {

    if(true){
        if(!visible) return null;
        return (
            <div className="flex justify-center items-center bg-white bg-opacity-95 inset-0 fixed" id="overlay">
                <div className="flex justify-center items-center bg-slate-600 bg-opacity-20 rounded-2xl px-10 py-10 mx-5 my-10">
                    <div className="flex justify-center items-center"><img className="h-4/6 w-5/6 rounded-xl drop-shadow-xl my-3" src={property1} alt="property1"/></div>
                    <div className="flex flex-col justify-start items-end rounded-xl text-black drop-shadow-2xl h-full">
                        <button onClick={onClose} className='my-2'><svg  id="close-btn" class="w-6 h-6" fill="#fff" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button>
                        <div className = "flex justify-between items-center w-80 my-8 px-2" >
                            <div className="text-xl font-semibold">Property #420</div>
                            <div className="flex justify-center items-center">
                                <div className='flex justify-center items-center border-2 border-white bg-white text-md text-black font-semibold rounded-2xl px-6 py-1'>
                                    <img className="h-8 w-8 mx-2" src={eth} alt="bed"/>
                                    <div id="buy-sell-btn">4.20</div>    
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center items-center btn rounded-2xl text-black w-80">
                            <img className="h-10 w-10 mx-2" src={bed} alt="bed"/>
                            <div className='mr-3'>4</div>
                            <img className="h-8 w-8 mx-2" src={bathtub} alt="bathtub"/>
                            <div className='mr-3'>4</div>
                            <img className="h-8 w-8 mx-2" src={room} alt="room"/>
                            <div className='mr-3'>4</div>
                            <img className="h-14 w-14 mx-2" src={heart} alt="heart"/>
                        </div>
                        <div className="flex flex-col justify-center items-center my-10 font-bold">
                            You don't own this Property.
                            <button className="bg-slate-800 text-white font-bold rounded-2xl px-32 py-4 my-2">Buy Now</button>
                        </div>
                        <div className="flex flex-col justify-center items-center my-10 font-bold">
                            You own this Property.
                            <button className="bg-slate-800 text-white font-bold rounded-2xl px-32 py-4 my-2">Sell Now</button>
                        </div>
                    </div>
                </div>
            </div>
    );
    }
}