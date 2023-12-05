import Home from "./components/Home.jsx";
import Login from "./components/Login.jsx";
import { Route, Routes } from "react-router-dom";
import Register from "./components/Register.jsx";

function App() {
    return (
        <Routes>
            <Route extric path="/" element={<Home />} />

            {/* <Route  path="/" element={user ? <Home /> : <Navigate to="/login" />} /> */}

            <Route path="/login" element={<Login />} />

            <Route path="/register" element={<Register />} />
        </Routes>
    );
}

export default App;
