// import React from 'react';

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailsCard from "./DetailsCard";

const Details = () => {
    const {id} = useParams();
    const [datas, setData] = useState(null);
    const [hotelData, setHotelData] = useState(null);
    const [details, setDetails] = useState([]);
    const [hotels, setHotels] = useState([]);
    // const [singleHotel, setSingleHotel] = useState({});
    // console.log(hotels);
    // console.log(hotelData);
  
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

     



    return (
        <div>
            <h1>This is Details</h1>
            {
                hotelData[0]?.hotels.map(hotl => <DetailsCard key={hotl.id} data={hotl}></DetailsCard>)
            }
        </div>
    );
};

export default Details;