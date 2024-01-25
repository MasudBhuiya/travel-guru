// import React from 'react';


const DetailsCard = ({data}) => {
    console.log(data);
    return (
        <div className="grid lg:grid-cols-2 my-8">
            <div>
                <img className="w-full md:max-w-[290px] rounded-md" src={data.image} alt="" />
            </div>
            <div>
            <h2 className="font-medium text-2xl mb-2">{data.name}</h2>
    <p className="max-w-80 mb-3 text-gray-500">{data.details}</p>
    <div className="flex items-center justify-between max-w-60">
        <div className="flex items-center gap-2"><span className="rating"><input type="radio" name="rating-2" className="mask mask-star-2 w-5 bg-orange-400" /></span> <p className="text-lg">{data.rating}</p></div>
    <div>
        <p><span className="text-lg font-bold">{data.cost_per_night}$/</span>night</p>
    </div>
    </div>
        </div>
        </div>
    );
};

export default DetailsCard;