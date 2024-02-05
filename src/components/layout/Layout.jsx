import { MemberContextProvider } from "../../contexts/MemberContext";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import PageRoutes from "./PageRoutes";
import StyledContents from "../styled/contents.styled";
import { GlobalContextProvider } from "../../contexts/GlobalContext";

function Layout(props) {
    return(
        <GlobalContextProvider>
            <MemberContextProvider>
                <BrowserRouter>
                    <Header/>
                    <StyledContents>
                        <PageRoutes/>
                    </StyledContents>
                    <Footer/>
                </BrowserRouter>
            </MemberContextProvider>
        </GlobalContextProvider>
        
    )
}

export default Layout;