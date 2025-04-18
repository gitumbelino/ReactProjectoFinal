import { Link, useLocation } from "react-router-dom";


export default function HomePage(){
    const location = useLocation();
    const message = location.state?.message;


    return(  
    <div>
        {message && <div>{message}</div>}
        <h2>Bem-vindo!</h2>
    </div>);

}