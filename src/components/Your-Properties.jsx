import React, { useState } from 'react';
import Info from './Property-Info.jsx';
import Modal from './Modal.jsx';
import bed from './images/bed.svg';
import bathtub from './images/bathtub.svg';
import room from './images/room.svg';
import heart from './images/heart.svg';
import eth from './images/eth.png';

const Buy = () => {
    const [showMyModal, setShowMyModal] = useState(false);
    const handleOnClose = () => setShowMyModal(false);
    return(
        <div className="flex flex-col justify-start items-center h-screen">
            <div className="text-3xl text-white font-semibold w-full px-64 my-8">Listed Properties</div>
            <div className='flex justify-center items-center flex-wrap rounded '>
                {Info.map((info) => {
                    if(info.owned===true){
                        return(
                            <>
                            <div className="flex flex-col justify-center items-center bg-white bg-opacity-20 rounded-2xl px-10 py-10 mx-5 my-10">
                                <div><img className="rounded-xl drop-shadow-xl h-80 w-80 my-3" src={info.src} alt={info.alt}/></div>
                                <div className="flex flex-col jusity-center items-center text-white rounded-xl drop-shadow-2xl">
                                    <div className = "flex justify-between items-center w-80 my-8 px-2" >
                                        <div className="text-xl font-semibold">Property {info.code}</div>
                                        <div className="flex justify-center items-center">
                                            <button onClick={() => setShowMyModal(true)} className='flex justify-center items-center bg-white text-black text-md font-semibold border-2 border-white rounded-2xl px-6 py-1'>
                                                <img className="h-8 w-8 mx-2" src={eth} alt="bed"/>
                                                <div>{info.price}</div>  
                                            </button>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center btn rounded-2xl text-black w-80">
                                        <img className="h-10 w-10 mx-1" src={bed} alt="bed"/>
                                        <div className='mr-2'>{info.rooms}</div>
                                        <img className="h-8 w-8 mx-1" src={bathtub} alt="bathtub"/>
                                        <div className='mr-2'>{info.bathrooms}</div>
                                        <img className="h-8 w-8" src={room} alt="room"/>
                                        <div className=''>{info.sqft}</div>
                                        <img className="h-14 w-14" src={heart} alt="heart"/>
                                        <div className='mr-2'>{info.likes}</div>
                                    </div>
                                </div>
                            </div>
                            <Modal onClose={handleOnClose} visible={showMyModal} />
                            </>
                        );
                    }
                })}      
            </div>
        </div>
    );
}

export default Buy;