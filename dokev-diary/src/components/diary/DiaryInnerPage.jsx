import styled from "styled-components";
import Page from "./Page";
import { useRecoilState } from "recoil";
import { pageState } from "../../state/atoms";
import pageData from "../../data/pageData.json";

const DiaryInnerPage = () => {
    const [page, setPage] = useRecoilState(pageState);
    return (
        <OuterFrame>
            <NextButton
                onClick={() => {
                    page === pageData.day.length - 1
                        ? setPage(0)
                        : setPage(page + 1);
                }}
            >
                Next&nbsp;
                <Triangle />
            </NextButton>
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
                <Page />
            </DArea>
            <WArea>
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
                <Writing>
                    &nbsp;
                    {pageData.day[page].text.map((innerText) => {
                        return innerText.length > 1 ? (
                            innerText
                        ) : (
                            <Special>{innerText}</Special>
                        );
                    })}
                </Writing>
            </WArea>
        </OuterFrame>
    );
};

const OuterFrame = styled.div`
    margin: 5vh;
    border: 0.4vh solid #605551;
    height: 80vh;
`;
const NextButton = styled.div`
    display: flex;
    position: absolute;
    top: 1.5vh;
    right: 2vh;
    align-items: center;
    color: #605551;
    cursor: pointer;
`;
const Triangle = styled.div`
    width: 0;
    height: 0;
    border-bottom: 1vh solid transparent;
    border-top: 1vh solid transparent;
    border-left: 1.5vh solid #605551;
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
    overflow: hidden;
`;
const WArea = styled.div`
    width: 100.1%;
    display: flex;
    font-size: 5vh;
`;
const Writing = styled.div`
    position: absolute;
    width: 93%;
    margin-left: 1.5vh;
    font-family: "Gaegu", cursive;
    letter-spacing: 3.6vh;
    word-spacing: 1.5vh;
    line-height: 7.3vh;
`;
const Special = styled.span`
    font-family: "Gaegu", cursive;
    margin-right: 2.5vh;
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
