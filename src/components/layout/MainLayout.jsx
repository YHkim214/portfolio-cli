import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import StyledContents from "../styled/contents.styled";

function MainLayout(props) {
    return(
        <>
        <Header/>
            <StyledContents>
                <Outlet/>
            </StyledContents>
        <Footer/>
        </>
    )
}

export default MainLayout;