import { useContext } from "react";
import { MemberContext } from "../contexts/MemberContext";

function Home() {
    const memberContext = useContext(MemberContext);

    const onClickHandler = async() => {
        const response = await memberContext.getMemberInfo();
        console.log(response);
    }

    return(
        <>
            <h1>This is Home</h1>
            <button onClick={onClickHandler}>테스트</button>
        </>
    );
}

export default Home;