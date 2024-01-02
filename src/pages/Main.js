import { Route, Routes } from "react-router-dom";
import Join from "./Join";
import Login from "./Login";
import Home from "./Home";

function Main() {
    return(
        <div className="content">
            <Routes>
                <Route path="/" Component={Home}/>
                <Route path="/join" Component={Join}/>
                <Route path="/login" Component={Login}/>
            </Routes>
        </div>
    );
}

export default Main;