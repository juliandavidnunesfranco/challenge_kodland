import Home from "./components/Home.jsx";
import Login from "./components/Login.jsx";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import Register from "./components/Register.jsx";
//import "../public/style.css";


function App() {
    const user = useSelector((state) => state.usersReducers.user); // accede al store de la app  donde estan los estados
    console.log("EL USER", user); // muestro el usuario en la consola del navegado
    return (
        <Routes>
            <Route extric path="/" element={<Home />} />
            {user?.email ? ( // aca le digo que si tiene un en el estado un usuario me lleve a login
                <Route path="/login" element={<Login />} />
            ) : (
                // de lo contrario me lleve a register
                <Route path="/register" element={<Register />} />
            )}
        </Routes>
    );
}

export default App;
