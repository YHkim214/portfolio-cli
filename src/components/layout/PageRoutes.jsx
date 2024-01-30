import { Route, Routes } from "react-router-dom";
import JoinPage from "../../pages/JoinPage";
import LoginPage from "../../pages/LoginPage";
import HomePage from "../../pages/HomePage";
import { CHANGE_NICKNAME, CHANGE_PASSWORD, HOME, JOIN, LOGIN } from "../../common/constants/navigation";
import ChangeNicknamePage from "../../pages/ChangeNicknamePage";
import ChangePasswordPage from "../../pages/ChangePasswordPage";

function PageRoutes() {
    return(
        <Routes>
            <Route path={HOME} Component={HomePage}/>
            <Route path={JOIN} Component={JoinPage}/>
            <Route path={LOGIN} Component={LoginPage}/>
            <Route path={CHANGE_NICKNAME} Component={ChangeNicknamePage}/>
            <Route path={CHANGE_PASSWORD} Component={ChangePasswordPage}/>
        </Routes>
    );
}

export default PageRoutes;