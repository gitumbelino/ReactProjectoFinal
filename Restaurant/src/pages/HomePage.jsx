import { Link, useLocation } from "react-router-dom";


export default function HomePage(){
    const location = useLocation();
    const message = location.state?.message;


    return(  
    <div>
        {message && <div>{message}</div>}
        <h5>As Minhas Funcionalidades</h5>
        <ul>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/login">Login</Link></li>
        </ul>
    </div>);

}