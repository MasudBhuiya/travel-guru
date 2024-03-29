// import React from 'react';
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png"
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
const Navbar2 = () => {
    const {logOut, user} = useContext(AuthContext);

    const handleLogout = () =>{
        logOut()
        .then()
        .catch(error => {
            console.log(error.message);
        })
    }
    return (
        <div className="navbar max-w-[1400px] pt-3 mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content  mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/destination">Destination</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <Link to="/login" className="btn bg-[#F9A51A] hover:bg-[#ebbb70] border-none text-white font-bold md:px-7">Login</Link>
                    </ul>
                </div>
                <img className="w-[120px] h-[56px] " src={logo} alt="" />
               
            </div>
            <div className="navbar-end hidden lg:flex">

                <ul className="menu menu-horizontal font-bold px-1 gap-4 ">
                <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/destination">Destination</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                </ul>
                {
                    user ? <><Link onClick={handleLogout} className="btn bg-[#F9A51A] hover:bg-[#ebbb70] border-none text-white font-bold md:px-7">LogOut</Link></>: <><Link to="/login" className="btn bg-[#F9A51A] hover:bg-[#ebbb70] border-none text-white font-bold md:px-7">Login</Link></>
                }
            </div>
            
        </div>
    );
};

export default Navbar2;