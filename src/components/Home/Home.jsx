// import React from 'react';
import './Home.css'
const Home = ({data}) => {

    console.log(data);
    return (
        <div>
            {
                data  ?
                 <><h1 className='title'>{data[0]?.name}</h1>
                <p className='sub-title'>{data[0]?.details}</p>
                <button className="btn bg-[#F9A51A] hover:bg-[#ebbb70] border-none text-white font-bold px-10">Booking</button></>
                : 
                <><h1 className='title'>Cox`s bazar</h1>
                <p className='sub-title'>Coxs Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...</p>
                <button className="btn bg-[#F9A51A] hover:bg-[#ebbb70] border-none text-white font-bold px-10">Booking</button></>
            }
        </div>
    );
};

export default Home;