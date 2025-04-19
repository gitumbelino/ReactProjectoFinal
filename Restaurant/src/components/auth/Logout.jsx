import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './auth.css';


export default function Logout() {
    const navigate = useNavigate();
    localStorage.clear();

    useEffect(() => {
        localStorage.clear();

        navigate('/');
    }, [navigate]);

    return (
        <div>
            logging out
        </div>
    )

}