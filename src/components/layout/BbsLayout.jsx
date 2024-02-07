import { Outlet } from "react-router-dom";
import Header from "./Header";

const BbsLayout = () => {
    return(
        <>
        <Header/>
        <Outlet/>
        </>
    )
}

export default BbsLayout;