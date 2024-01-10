import { useContext } from "react";
import { MemberContext } from "../contexts/MemberContext";

function Home() {
    const memberContext = useContext(MemberContext);

    const onClickHandler = () => {
        memberContext.getMemberInfo();
    }

    const refreshHandler = () => {
        memberContext.refresh();
    }

    return(
        <>
            <h1>This is Home</h1>
            <button onClick={onClickHandler}>테스트</button>
            <button onClick={refreshHandler}>토큰 리프레시</button>
        </>
    );
}

export default Home;