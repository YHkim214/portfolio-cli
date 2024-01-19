import { MemberContextProvider } from "../contexts/MemberContext";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./PageRoutes";

function Layout(props) {
    return(
        <MemberContextProvider>
            <BrowserRouter>
                <div>
                    <Header/>
                    
                    <div className="contents">
                        <Main/>
                    </div>

                    <Footer/>
                </div>
            </BrowserRouter>
        </MemberContextProvider>
    )
}

export default Layout;