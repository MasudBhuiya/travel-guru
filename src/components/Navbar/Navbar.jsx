// import React from 'react';
import logo from "../../assets/images/logo.png"
const Navbar = () => {
    return (
        <div className="navbar max-w-[1400px] pt-8 mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content  mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>News</a></li>
                        <li><a>Blog</a></li>
                        <li><a>Contact</a></li>
                        <li><a>Destination</a></li>
                    </ul>
                </div>
                <img className="w-[120px] h-[56px] text-white" src={logo} alt="" />
                <div className="form-control">
                    <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto lg:w-[500px]" />
                </div>
            </div>
            <div className="navbar-end hidden lg:flex">

                <ul className="menu menu-horizontal text-white px-1 gap-4 lg:-me-72">
                    <li><a>News</a></li>
                    <li><a>Blog</a></li>
                    <li><a>Contact</a></li>
                    <li><a>Destination</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn bg-[#F9A51A] hover:bg-[#ebbb70] border-none text-white font-bold md:px-7">Login</a>
            </div>
        </div>
    );
};

export default Navbar;