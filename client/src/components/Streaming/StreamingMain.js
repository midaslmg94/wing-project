import React from "react";
import Recommend from "./Recommend";
import Carousel from "react-material-ui-carousel";

const StreamingMain = () => {
    return (
        <div style={{ gridColumn: "2 / 8", fontFamily: "NanumBarunGothic" }}>
            <Carousel>
                <img style={{width: "970px", height:"400px"}} src="https://img.insight.co.kr/static/2018/11/01/700/56hi24c40tx1f9mbjpky.jpg"/>
                <img style={{width: "970px", height:"400px"}} src="https://img.insight.co.kr/static/2018/11/01/700/56hi24c40tx1f9mbjpky.jpg"/>
                <img style={{width: "970px", height:"400px"}} src="https://img.insight.co.kr/static/2018/11/01/700/56hi24c40tx1f9mbjpky.jpg"/>
                <img style={{width: "970px", height:"400px"}} src="https://img.insight.co.kr/static/2018/11/01/700/56hi24c40tx1f9mbjpky.jpg"/>
            </Carousel>

        </div>
    )
}

export default StreamingMain