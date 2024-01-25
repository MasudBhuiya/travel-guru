// import React from 'react';

import { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
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
    useEffect(() => {
        {
                const data = details?.find(detail => detail?.id == id);
                setData(data);
              }
    }, [details, id])
    
  
    useEffect(() => {
      fetch('/data/details.json')
        .then(res => res.json())
        .then(d => {
          console.log(d)
          setHotels(d)
        })
        .catch(e => {
          console.log(e)
        })
    }, [])

      useEffect(() => {
        {
                const data = hotels?.filter(hotel => hotel?.location == datas?.name);
                setHotelData(data);
              }
    }, [hotels, datas?.name])

     
    useEffect(() => {
      {
              hotelData?.map(hotel => setSingleHotel(hotel));
              
            }
  }, [hotelData])


    return (
        <div className="max-w-[1400px] mx-auto mb-10">
            <Navbar2></Navbar2>
            <hr className="my-4 border" />
            <div className="px-5">
            <p>length: {details.length}</p>
            <p>252 stays Apr 13-17 3 guests</p>
            <h2 className="font-bold text-3xl mt-1">Stay in {datas?.name}</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="flex flex-col items-center justify-center">
              {
                singleHotel?.hotels?.map(hotl => <DetailsCard key={hotl.id} data={hotl}></DetailsCard>)
            }
              </div>


              <div >
              {<iframe className="md:h-[772px] lg:ps-16 w-full rounded-md" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3748663.8212650553!2d85.3285154888565!3d23.4314278499533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adaaed80e18ba7%3A0xf2d28e0c4e1fc6b!2z4Kas4Ka-4KaC4Kay4Ka-4Kam4KeH4Ka2!5e0!3m2!1sbn!2sbd!4v1706203985556!5m2!1sbn!2sbd" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>}
              </div>
            </div>
            </div>
        </div>
    );
};

export default Details;