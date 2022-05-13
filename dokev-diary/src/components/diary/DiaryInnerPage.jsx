import { useEffect, useState } from "react";
import styled from "styled-components";
import Page1 from "./diaryPage/Page1";
const DiaryInnerPage = () => {
    return (
        <OuterFrame>
            <DayInfo>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 년 &nbsp; &nbsp; 월&nbsp;
                &nbsp; 일&nbsp; &nbsp; 요일&nbsp; 날씨
                <Weather>
                    <img src="/img/weather/sun.png" alt="sun" />
                    <img src="/img/weather/cloud.png" alt="cloud" />
                    <img src="/img/weather/rain.png" alt="rain" />
                </Weather>
            </DayInfo>
            <DArea>
                <Page1 />
            </DArea>
            <AArea>
                <WrapVLine>
                    {[...Array(11)].map((n) => {
                        return <VLine></VLine>;
                    })}
                </WrapVLine>
                <WrapHLine>
                    {[...Array(2)].map((n) => {
                        return <HLine></HLine>;
                    })}
                </WrapHLine>
            </AArea>
        </OuterFrame>
    );
};

const OuterFrame = styled.div`
    margin: 5vh;
    border: 0.4vh solid #605551;
    height: 80vh;
`;
const DayInfo = styled.div`
    height: 8vh;
    width: 100.1%;
    border-bottom: 0.4vh solid #605551;
    font-size: 4vh;
    display: flex;
    align-items: center;
    color: #605551;
`;
const Weather = styled.div`
    display: flex;
    align-items: center;
    & img {
        width: 5vh;
        margin-left: 4vh;
    }
`;

const DArea = styled.div`
    width: 100.1%;
    height: 50vh;
    border-bottom: 0.4vh solid #605551;
`;
const AArea = styled.div`
    font-family: "Gaegu", cursive;
    width: 100.1%;
    display: flex;
    font-size: 5vh;
    letter-spacing: 3.5vh;
`;
const WrapVLine = styled.div`
    position: absolute;
    display: flex;
`;
const VLine = styled.div`
    background-color: #605551;
    width: 0.3vh;
    height: 25vh;
    margin-left: 7.3vh;
`;
const WrapHLine = styled.div`
    width: 89.9%;
    position: absolute;
`;
const HLine = styled.div`
    background-color: #605551;
    height: 0.3vh;
    margin-top: 7vh;
`;
export default DiaryInnerPage;
