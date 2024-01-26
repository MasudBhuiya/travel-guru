// import React from 'react';
import Navbar from '../Navbar/Navbar';
import './About.css'

const About = () => {
    return (
        <div>
            <div className='backgroundd h-[500px] md:h-[800px] relative'>
        <Navbar></Navbar>
                <div className="relative top-24 flex flex-col items-center justify-center">
                <div className='text-white h-[240px] md:h-[400px]  flex flex-col items-center justify-center lg:w-[1440px]  bg-opacity-50 bg-slate-700'>
                    <h1 className='md:text-7xl text-4xl font-bold '>ABOUT US</h1><br />
                    <p className='text-xl text-center'>Empowering Travel Guru - Our Journey, Your Potential</p>
                </div>
                </div>

            </div>


            <div className='mt-16 md:mt-28 max-w-[1440px] mx-auto px-4 lg:px-0'>
                <h1 className='title text-3xl md:text-6xl text-center max-w-[830px] mx-auto'>We’ve created wellness solutions that are as unique as you.</h1>
                <p className=' max-w-[657px] mx-auto text-xl text-center mt-3'>A water bottle is a container designed for holding and transporting water. It typically has a narrow neck</p>
                <div className='lg:flex justify-between items-center gap-6 mt-20  '>
                    <img className='w-full lg:max-w-[550px] md:h-[320px] mb-6 lg:mb-0' src="https://media.istockphoto.com/id/516449022/photo/lady-with-kayak.webp?b=1&s=170667a&w=0&k=20&c=rFOlrbuQvYFRmZ-SVvUD1PYmic4vNzYVT1DvK332bBs=" alt="" />
                    <div>
                        <h1 className='title text-3xl md:text-6xl mb-3'>Our Story</h1>
                        <p className='max-w-[717px]'>Embark on a journey with Alex, your ultimate travel guru. With an insatiable passion for exploration, Alex has navigated bustling markets in Marrakech, uncovered hidden gems in Parisian cafes, and roamed the world to curate experiences just for you. Whether you`re a solo adventurer, a family seeking a perfect retreat, or a couple longing for a romantic getaway, Alex`s insights and recommendations cater to all. Let the pages of your travel story come alive with Alex as your trusted guide, turning every trip into an unforgettable adventure.</p>
                        <button className='button items-center btn justify-center mt-5 hover:bg-cyan-800  bg-cyan-500 text-white rounded-none'>Learn More</button>
                    </div>
                </div>
                <div className='lg:flex justify-between items-center gap-6 mt-20 md:mt-32 '>
                    
                    <div>
                        <h1 className='title text-3xl md:text-6xl mb-3'>Shine from inside</h1>
                        <p className='max-w-[717px]'>Radiate brilliance from within, letting your inner light illuminate every moment. Embrace authenticity, kindness, and passion as the sources of your glow. By nurturing your true self, you become a beacon of positivity and inspiration, casting a warm light that brightens your path and touches the lives of those around you. Let your inner shine be a guiding force, creating a world where your authenticity becomes a source of inspiration for others.</p>
                        <button className='button items-center btn justify-center mt-5 hover:bg-cyan-800  bg-cyan-500 text-white rounded-none'>Learn More</button>
                    </div>
                    <img className='w-full lg:max-w-[550px] md:h-[320px] mt-6 lg:mt-0' src="https://media.istockphoto.com/id/1041186748/photo/mystical-dark-autumn-forest-with-trail-in-blue-fog-landscape-with-enchanted-trees-with-orange.jpg?s=612x612&w=0&k=20&c=_m4LiQzeMAr3VHNztyVRQOaVog1p9ddkrP9zxFV2keM=" alt="" />
                </div>


                {/* loved section  */}
                <div className='mt-20 md:mt-32'>
                <h1 className='title text-3xl md:text-6xl text-center max-w-[830px] mx-auto'>Our Customer Love</h1>
                <p className=' max-w-[657px] mx-auto text-xl text-center mt-3'>Embarking on Adventures, Building Memories: Where Customer Love Takes Flight with the Travel Guru</p>


                    {/* user details  */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14 md:gap-y-20 mt-10 md:mt-20'>
                    <div>
                        <p className='max-w-[350px]'>Discover how our travel guru guided this solo adventurer to off-the-beaten-path destinations, turning a solitary journey into a rich tapestry of experiences.</p>
                        <div className='flex items-center gap-4 mt-4'>
                            <img className='w-16 rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcSgiG4CPYdRpP7ahhJZaDDHj5iBaOFEFDbGpvLse0trNhfr5A6efOXjA-bfjaNF1XNf0&usqp=CAU" alt="" />
                            <div>
                            <h1 className='font-medium '>Emily Thompson</h1>
                        <p>UI Designer</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className='max-w-[350px]'>Explore the testimonials of a family who found the perfect balance of fun and relaxation, thanks to the tailored recommendations and insights provided by our travel guru.</p>
                        <div className='flex items-center gap-4 mt-4'>
                            <img className='w-16 rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_pgbZQKfFX10RBv-IDDzM9Ety2UpwVp1igauCI1o63eVAOtdvPcf6Ty5XcJq78hc88dk&usqp=CAU" alt="" />
                            <div>
                            <h1 className='font-medium '>Carlos Rodriguez</h1>
                        <p>UI Designer</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className='max-w-[350px]'>Hear from a couple who transformed their vacation into a romantic escapade, with the travel guru`s expertise leading them to the most enchanting and intimate destinations.</p>
                        <div className='flex items-center gap-4 mt-4'>
                            <img className='w-16 rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnhymeWKr66OejjS-OpM8VK97n-7E5an4fe__1HaHs9MAPd6zbDfY1uwZUeGoGuUFGGR8&usqp=CAU" alt="" />
                            <div>
                            <h1 className='font-medium '>Sophia Johnson</h1>
                        <p>UI Designer</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className='max-w-[350px]'>Delve into the story of a food enthusiast who experienced the world`s flavors with guidance from our travel guru, discovering hidden culinary gems and savoring unforgettable tastes.</p>
                        <div className='flex items-center gap-4 mt-4'>
                            <img className='w-16 rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXZA75zaJus0m40dxoToryR3qD-Vo2kr1eAw&usqp=CAU" alt="" />
                            <div>
                            <h1 className='font-medium '>Raj Kapoor</h1>
                        <p>UI Designer</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className='max-w-[350px]'>Learn how a history enthusiast immersed themselves in the rich tapestry of cultures and histories, with our travel guru`s curated itineraries providing a deep and meaningful exploration.</p>
                        <div className='flex items-center gap-4 mt-4'>
                            <img className='w-16 rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY_UP9cSEjFLqwEVNDqWPhu9lUPLkzzaVpJw&usqp=CAU" alt="" />
                            <div>
                            <h1 className='font-medium '>Olivia Chen</h1>
                        <p>UI Designer</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className='max-w-[350px]'>Follow the journey of a budget-conscious traveler who uncovered affordable yet incredible destinations and activities, proving that memorable adventures need not break the bank.</p>
                        <div className='flex items-center gap-4 mt-4'>
                            <img className='w-16 rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcSgiG4CPYdRpP7ahhJZaDDHj5iBaOFEFDbGpvLse0trNhfr5A6efOXjA-bfjaNF1XNf0&usqp=CAU" alt="" />
                            <div>
                            <h1 className='font-medium '>Marcus Taylor</h1>
                        <p>UI Designer</p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default About;