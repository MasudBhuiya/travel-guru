import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';


const PrivateRoute = ({children}) => {
    const location = useLocation();
    const {user, loading} = useContext(AuthContext);

    if(loading == true){
       return <progress className="progress w-56"></progress>
    }
    
    if(user){
        return children;
    }
    return <Navigate to='/login' replace={true} state={{from : location}}></Navigate>
};

export default PrivateRoute;