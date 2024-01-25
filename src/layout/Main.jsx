// import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
import './Main.css'

import Navbar from "../components/Navbar/Navbar";
import Home from '../components/Home/Home';
// import Sidebar from '../components/Home/Sidebar';
import sidebar1 from '../assets/images/Sajek.png'
import sidebar2 from '../assets/images/Sreemongol.png'
import sidebar3 from '../assets/images/sundorbon.png'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
  const [data, setData] = useState(null);
  const [details, setDetails] = useState([]);
  // console.log(details);
  // console.log(data);

  useEffect(() => {
    fetch('/data/data.json')
      .then(res => res.json())
      .then(d => {
        console.log(d)
        setDetails(d)
      })
      .catch(e => {
        console.log(e)
      })
  }, [])
  const handleDetails = (num) => {
    {
      const data = details.filter(detail => detail.id == num);
      setData(data);
    }

  }
  return (
    <div className="main">
      <div className='background'>
      <Navbar></Navbar>
      <div className='grid grid-cols-1 items-center p-4 md:p-0 gap-8 md:gap-0 lg:ms-[150px] lg:grid-cols-2 justify-evenly pt-10 md:pt-[150px]'>
        <div>
          <Home key={data?.id} data={data}></Home>
          
        </div>
        <div>
          <>
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide onClick={() => handleDetails(1)}><Link><img className='hover:border-2 rounded-3xl hover:border-yellow-400' src={sidebar1} alt="" /><h4 className='md:text-2xl font-bold text-white text-center relative bottom-14'>Cox`s Bazar</h4></Link></SwiperSlide>

              <SwiperSlide onClick={() => handleDetails(2)}><Link><img className='hover:border-2 rounded-3xl hover:border-yellow-400' src={sidebar2} alt="" /></Link><h4 className='md:text-2xl font-bold text-white text-center relative bottom-14'>Sajek</h4></SwiperSlide>
              <SwiperSlide onClick={() => handleDetails(3)}><Link><img className='hover:border-2 rounded-3xl hover:border-yellow-400' src={sidebar3} alt="" /></Link><h4 className='md:text-2xl font-bold text-white text-center relative bottom-14'>Rangamati</h4></SwiperSlide>

              <SwiperSlide onClick={() => handleDetails(4)}><Link><img className='hover:border-2 rounded-3xl hover:border-yellow-400' src={sidebar1} alt="" /></Link><h4 className='md:text-2xl font-bold text-white text-center relative bottom-14'>Jaflong</h4></SwiperSlide>
              <SwiperSlide onClick={() => handleDetails(5)}><Link><img className='hover:border-2 rounded-3xl hover:border-yellow-400' src={sidebar2} alt="" /></Link><h4 className='md:text-2xl font-bold text-white text-center relative bottom-14'>Saint Martin</h4></SwiperSlide>
              <SwiperSlide onClick={() => handleDetails(6)}><Link><img className='hover:border-2 rounded-3xl hover:border-yellow-400' src={sidebar3} alt="" /></Link><h4 className='md:text-2xl font-bold text-white text-center relative bottom-14'>Sundarban</h4></SwiperSlide>
              <SwiperSlide onClick={() => handleDetails(7)}><Link><img className='hover:border-2 rounded-3xl hover:border-yellow-400' src={sidebar1} alt="" /></Link><h4 className='md:text-2xl font-bold text-white text-center relative bottom-14'>Himsori</h4></SwiperSlide>
              <SwiperSlide onClick={() => handleDetails(8)}><Link><img className='hover:border-2 rounded-3xl hover:border-yellow-400' src={sidebar2} alt="" /></Link><h4 className='md:text-2xl font-bold text-white text-center relative bottom-14'>Sri Mongol</h4></SwiperSlide>
              <SwiperSlide onClick={() => handleDetails(9)}><Link><img className='hover:border-2 rounded-3xl hover:border-yellow-400' src={sidebar3} alt="" /></Link><h4 className='md:text-2xl font-bold text-white text-center relative bottom-14'>Sada Pathor</h4></SwiperSlide>
            </Swiper>
          </>
        </div>
      </div>
      
      </div>
    </div>
  );
};

export default Main;