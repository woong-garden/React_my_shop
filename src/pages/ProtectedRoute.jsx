import React,{useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../components/context/AuthContext';

function ProtectedRoute({ children, requireAdmin }) {
    const {user} = useAuthContext();
    const navigate = useNavigate();

    useEffect(() => {
        if(!user || (requireAdmin && !user.isAdmin)){
        alert('잘못된경로야')
        navigate('/', { replace: true });
        }
    },[])
    
    return children;
}

export default ProtectedRoute;



