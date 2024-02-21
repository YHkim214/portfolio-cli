import { useContext } from "react";
import { formatSqlDate } from "../../../common/utils/dateUtil";
import { MemberContext } from "../../../contexts/MemberContext";
import Button from "../../common/Button";
import { axiosWrapperAuth } from "../../../common/configs/axiosConfig";
import { DELETE_BBS_API } from "../../../common/constants/api";

const BbsItem = ({...props}) => {
    const memberContext = useContext(MemberContext);

    const handleClick = () => {
        axiosWrapperAuth.post(DELETE_BBS_API, {bbsId: props.item.bbsId})
        .then((response) => {
            alert("게시글이 삭제 되었습니다!");
            props.getBbsList(true);
        })
        .catch((error) => alert(error))
    }

    const renderFooter = () => {
        if(props.item.memberId === Number(memberContext.memberInfo?.memberId)) {
            return (
                <Button width="20%" height="25px" $background="red" onClick={handleClick}>삭제</Button>
            )
        }
    }

    return (
        <div className="bbs-item">
            <div className="bbs-item-info">
                <span className="bbs-nickname">{props.item.memberNickname}</span>
                <span className="bbs-createtime">{formatSqlDate(props.item.createTime)}</span>
            </div>
            <div className="bbs-item-content">
                {props.item.bbsContent}
            </div>
            <div className="bbs-item-footer">
                {renderFooter()}
            </div>
        </div>
    )
}

export default BbsItem;