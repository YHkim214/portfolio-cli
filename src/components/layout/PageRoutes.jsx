import { Route, Routes } from "react-router-dom";
import JoinPage from "../../pages/JoinPage";
import LoginPage from "../../pages/LoginPage";
import HomePage from "../../pages/HomePage";
import { BBS, CHANGE_NICKNAME, CHANGE_PASSWORD, HOME, JOIN, LOGIN } from "../../common/constants/navigation";
import ChangeNicknamePage from "../../pages/ChangeNicknamePage";
import ChangePasswordPage from "../../pages/ChangePasswordPage";
import BbsPage from "../../pages/BbsPage";
import MainLayout from "./MainLayout";
import BbsLayout from "./BbsLayout";

function PageRoutes() {
    return(
        <Routes>
            <Route Component={MainLayout}>
                <Route path={HOME} Component={HomePage}/>
                <Route path={JOIN} Component={JoinPage}/>
                <Route path={LOGIN} Component={LoginPage}/>
                <Route path={CHANGE_NICKNAME} Component={ChangeNicknamePage}/>
                <Route path={CHANGE_PASSWORD} Component={ChangePasswordPage}/>   
            </Route>
            <Route Component={BbsLayout}>
                <Route path={`${BBS}/:id`} Component={BbsPage}/>
            </Route>
        </Routes>
    );
}

export default PageRoutes;