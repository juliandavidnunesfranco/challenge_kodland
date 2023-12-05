import Home from "./components/Home.jsx";
import Login from "./components/Login.jsx";
import { Navigate, Route, Routes } from "react-router-dom";
import Register from "./components/Register.jsx";

const USER_TOKEN = "user";

function App() {
    const user = localStorage.getItem(USER_TOKEN);

    return (
        <Routes>
            <Route extric path="/" element={<Home />} />
            <Route
                path="/login"
                element={user ? <Login /> : <Navigate to="/" />}
            />
            <Route path="/register" element={<Register />} />
        </Routes>
    );
}

export default App;
