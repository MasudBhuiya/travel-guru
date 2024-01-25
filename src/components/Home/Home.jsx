// import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'
const Home = ({data}) => {

    console.log(data);
    return (
        <div>
            {
                data  ?
                 <><h1 className='title text-5xl md:text-7xl'>{data[0]?.name}</h1>
                <p className='sub-title max-w-[450px]'>{data[0]?.details}</p>
<label onClick={()=>document.getElementById('my_modal_3').showModal()} className="btn bg-[#F9A51A] hover:bg-[#ebbb70] border-none text-white font-bold px-10">Booking</label>
                
{/* You can open the modal using document.getElementById('ID').showModal() method */}
<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <div className='lg:px-10 py-6'>
   <form className='' action="">
                 <div className='flex flex-col mb-[10px]'>
                     <label className='mb-1 text-gray-400' htmlFor="">Origin</label>
                 <input type="text" name="text" className=' bg-zinc-100 rounded-md p-3 font-bold text-center ' readOnly placeholder='Dhaka' required  />
                 </div>
                 <div className='flex flex-col mb-[10px]'>
                 <label className='mb-1 text-gray-400' htmlFor="">Destination</label>
                 <input type="text" name="text" className=' bg-zinc-100 rounded-md p-3 text-center font-bold ' readOnly placeholder={data[0]?.name} required  />
                 </div>
                 <div className='grid grid-cols-1 md:grid-cols-2 md:gap-5 md:w-fit'>
                 <div className='flex flex-col mb-[10px]'>
                 <label className='mb-1 text-gray-400' htmlFor="">From</label>
                 <input type="date" name="from" className=' bg-zinc-100 rounded-md p-3 text-center font-bold '  required  />
                 </div>
                 <div className='flex flex-col mb-[10px]'>
                 <label className='mb-1 text-gray-400' htmlFor="">To</label>
                 <input type="date" name="to" className=' bg-zinc-100 rounded-md p-3 text-center font-bold '  required  />
                 </div>
                 </div>
                 <Link to={`/details/${data[0]?.id}`}><input className='btn btn-block bg-orange-400 mt-6 rounded-md hover:bg-orange-600 text-lg' type="submit" value="Start Booking" name=""  /></Link>
             </form>
   </div>
  </div>
</dialog>
                </>
                : 
                <><h1 className='title text-5xl md:text-7xl'>Discover the<br /> World  with<br /> Travel Guru</h1>
                <p className='sub-title max-w-[450px]'>Coxs Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...</p>
                <button  className="btn bg-[#f3c170] hover:bg-[#ebbb70] border-none  font-bold px-10">Select First</button></>
            }
        </div>
    );
};

export default Home;
