import YouTube from "react-youtube"

const YoutubeIframe = ({...props}) => {

    const option = {
        playerVars: {
            autoplay: 0,
            rel: 0
        }
    }

    return <YouTube videoId={props.liveStream.lsYtId} opts={option}></YouTube>
}

export default YoutubeIframe