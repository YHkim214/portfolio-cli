import { Route, Routes } from "react-router-dom";
import JoinPage from "../pages/JoinPage";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";

function PageRoutes() {
    return(
        <Routes>
            <Route path="/" Component={HomePage}/>
            <Route path="/join" Component={JoinPage}/>
            <Route path="/login" Component={LoginPage}/>
        </Routes>
    );
}

export default PageRoutes;