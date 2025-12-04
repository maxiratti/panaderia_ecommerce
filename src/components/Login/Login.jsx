import { useState } from "react";
import {useAuthContext} from "../../context/AuthContext/useAuthContext"
import { Navigate, useNavigate } from "react-router-dom";


export const Login = () => {
    const [userForm, setUserForm] = useState({name: "", password: ""});
    const {user, login} = useAuthContext();
    const navigate = useNavigate();

    if (user){
        return <Navigate to = "/admin/alta_productos" replace />
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setUserForm({...userForm, [name]: value});
        
    };

    const handleSubmit = (e) => {
        e.preventDefault()

        const sucess = login(userForm.name, userForm.password);
        if (sucess){
            navigate("/admin/alta-productos");
        } else{
            alert("Credenciales incorrectas");
            setUserForm({ name: "", passwword: ""});
        }        
    };

    return (
        <form onSubmit={handleChange}>
            <h2>Iniciar Sesión</h2>
            <div>
                <label htmlFor="name" >Usuario:</label>
                <input 
                    id="name"
                    type="text" 
                    name="name" 
                    value= {userForm.name} 
                    onChange={handleChange} 
                />
            </div>
            <div>
                <label htmlFor="password" >Contraseña:</label>
                <input 
                    id="password"
                    type="password" 
                    name="password" 
                    value= {userForm.password} 
                    onChange={handleChange} 
                />
            </div>
            <button type="submit">Iniciar Sesión</button>
 
        </form> 
    );

};