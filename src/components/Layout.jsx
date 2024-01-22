import { MemberContextProvider } from "../contexts/MemberContext";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import PageRoutes from "./PageRoutes";
import StyledContents from "./styled/contents.styled";

function Layout(props) {
    return(
        <MemberContextProvider>
            <BrowserRouter>
                <Header/>
                <StyledContents>
                    <PageRoutes/>
                </StyledContents>
                <Footer/>
            </BrowserRouter>
        </MemberContextProvider>
    )
}

export default Layout;