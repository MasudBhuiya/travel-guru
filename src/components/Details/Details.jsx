// import React from 'react';

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailsCard from "./DetailsCard";
import Navbar2 from "../Navbar/Navbar2";

const Details = () => {
    const {id} = useParams();
    const [datas, setData] = useState(null);
    const [hotelData, setHotelData] = useState(null);
    const [details, setDetails] = useState([]);
    const [hotels, setHotels] = useState([]);
    const [singleHotel, setSingleHotel] = useState({});
    // console.log(hotels);
    // console.log(singleHotel);
  
    useEffect(() => {
      fetch('../../public/data.json')
        .then(res => res.json())
        .then(data => setDetails(data))
    }, [])
    useEffect(() => {
        {
                const data = details.find(detail => detail.id == id);
                setData(data);
              }
    }, [details, id])
    
  
    useEffect(() => {
        fetch('../../../public/details.json')
          .then(res => res.json())
          .then(data => setHotels(data))
      }, [])

      useEffect(() => {
        {
                const data = hotels.filter(hotel => hotel.location == datas?.name);
                setHotelData(data);
              }
    }, [hotels, datas?.name])

     
    useEffect(() => {
      {
              hotelData?.map(hotel => setSingleHotel(hotel));
              
            }
  }, [hotelData])


    return (
        <div className="max-w-[1400px] mx-auto">
            <Navbar2></Navbar2>
            <hr className="my-4 border" />
            <p>252 stays Apr 13-17 3 guests</p>
            <h2 className="font-bold text-3xl mt-1">Stay in {datas?.name}</h2>
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
              {
                singleHotel?.hotels?.map(hotl => <DetailsCard key={hotl.id} data={hotl}></DetailsCard>)
            }
              </div>
              <div>
            <p>map</p>
              </div>
            </div>
        </div>
    );
};

export default Details;