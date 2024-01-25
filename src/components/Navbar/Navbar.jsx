// import React from 'react';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
const Navbar = () => {
    const {logOut, user} = useContext(AuthContext);

    const handleLogout = () =>{
        logOut()
        .then()
        .catch(error => {
            console.log(error.message);
        })
    }
    return (
        <div className="navbar max-w-[1400px] pt-8 mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content  mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li><Link to="/">Home</Link></li>
                        <li><Link to="/news">News</Link></li>
                        <li><Link to="/destination">Destination</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
                <img className="md:w-[120px] w-[80px] me-6 md:h-[56px]  text-white" src=
                'https://i.ibb.co/TcRjTVN/Frame.png' alt="" />
                <div className="form-control">
                    <input style={{border: '1px solid white'}} type="text" placeholder="Search" className="input bg-transparent  text-white border-gray-300 input-bordered w-24 md:w-auto lg:w-[500px]" />
                </div>
            </div>
            <div className="navbar-end hidden lg:flex">

                <ul className="menu menu-horizontal text-white px-1 gap-4 lg:-me-72">
                <li><Link to="/">Home</Link></li>
                        <li><Link to="/news">News</Link></li>
                        <li><Link to="/destination">Destination</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <><Link onClick={handleLogout} className="btn bg-[#F9A51A] hover:bg-[#ebbb70] border-none text-white font-bold md:px-7">LogOut</Link></>: <><Link to="/login" className="btn bg-[#F9A51A] hover:bg-[#ebbb70] border-none text-white font-bold md:px-7">Login</Link></>
                }
            </div>
        </div>
    );
};

export default Navbar;