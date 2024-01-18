import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import Navbar2 from '../Navbar/Navbar2';

const Login = () => {
    const [error, setError] = useState('');
    const [show, setShow] = useState(false);
    const {login, googleSignIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';
    const handleLogin = (e) =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);

        setError('');

        login(email, password)
        .then(result => {
            console.log(result.user);
            form.reset();
            
            navigate(from, {replace: true});
        })
        .catch(error => {
            setError(error.message);
        })
    }

    const handleGoogle = () =>{
        googleSignIn()
        .then()
        .then(err => {
            setError(err.message);
        })
    }
    return (
        <>
        <Navbar2></Navbar2>
        <div className='w-[500px]  mt-16 mx-auto border rounded-lg  px-16 py-6 border-slate-300'>
            <h2 className='text-3xl font-bold font-serif mb-3'>Login</h2>
            <form onSubmit={handleLogin} className='' action="">
                <div className='flex flex-col mb-[20px]'>
                <input type="email" name="email" className='border-b border-black  p-3' placeholder='Enter Your Email' required id="" />
                </div>
                <div className='flex flex-col'>
                <input type={show? 'text': 'password'} name="password" className='border-b  border-black p-3' placeholder='Password' required id="" />
                <p onClick={()=>setShow(!show)}><small className='btn btn-xs mt-2 bg-orange-300'>{show ? 'Hide' : 'Show'}</small></p>
                </div>
                <div className='flex justify-between items-center'>
                <div className='flex mt-2 items-center gap-1'>
                    <input type="checkbox" name="" id="" /> <p className='mb-1'>remember me</p>
                </div>
                <p className='btn btn-link '>Forget Password?</p>
                </div>
                <input className='btn btn-block bg-orange-400 mt-6 rounded-none hover:bg-orange-600 text-lg' type="submit" value="Login" name="" id="" />
            </form>
            <p className='text-center'><small>Don`t have an account?<Link to="/signup" className='btn btn-link text-orange-400'>Create New Account</Link></small></p>
            <p className='text-red-500 mt-2'>{error}</p>
        </div>
        <div className="divider max-w-[500px] mx-auto">Or</div>

        <div className='w-[500px] mx-auto '>
            <button className='btn btn-block mb-3 rounded-full bg-white '><img className='h-9 relative start-0' src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png" alt="" />Continue with facebook</button><br />
            <button onClick={handleGoogle} className='btn btn-block mb-3 rounded-full bg-white '><img className='h-9 relative start-0' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-s4u1SFtSMljIs7o7PyIHs8UtRvpGq2qwCIRhitR7GQ&s" alt="" />Continue with Google</button><br />
           
        </div>
        </>
    );
};

export default Login;