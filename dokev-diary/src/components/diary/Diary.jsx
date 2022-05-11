import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

const Diary = () => {
    const [mouseStateOnCover, setMouseStateOnCover] = useState(0);
    useEffect(() => {
        console.log(mouseStateOnCover);
    });
    return (
        <DiaryArea>
            <DiaryBook
                onMouseEnter={() => {
                    setMouseStateOnCover(1);
                }}
                onMouseLeave={() => {
                    setMouseStateOnCover(0);
                }}
                style={{
                    transform:
                        mouseStateOnCover === 0
                            ? "rotate3d(0, 1, 0, 0deg)"
                            : "rotate3d(0, 1, 0, 30deg)",
                    boxShadow:
                        mouseStateOnCover === 0
                        ? "none"
                        : "100px 20px 10px black",
                }}
            >
                <Logo src="./img/logo.jpg" />
                <AboutArea>
                    <About>
                        <School>초등학교</School>
                        <Class>
                            <div>학년</div>
                            <div>반</div>
                            <div>번</div>
                        </Class>
                        <Name>이름</Name>
                    </About>
                </AboutArea>
            </DiaryBook>
            {/* <DiaryBookBack /> */}
            {[0,1,2,3].map((n) => {
                return <DiaryPage key={n} number={n} />;
            })}
            <DiaryPage />
        </DiaryArea>
    );
};
const DiaryArea = styled.div`
    position: absolute;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    display: flex;
    justify-content: center;
`;

const DiaryBook = styled.div`
    position: absolute;
    background-color: #6ed5fe;
    width: 50%;
    height: 95vh;
    border-radius: 3vh;
    bottom: -10vh;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    z-index: 100;
    transform-origin: 0 100%;
    transition-duration:.7s;
    cursor: pointer;
`;

const AboutArea = styled.div`
    position: absolute;
    width: 50%;
    height: 25%;
    background-color: white;
    bottom: 12vh;
    border-radius: 15px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
`;
const Logo = styled.img`
    width: 50%;
    top: 10vh;
    position: absolute;
`;
const About = styled.div`
    width: 93%;
    height: 85%;
    background-color: white;
    bottom: 12vh;
    border-radius: 15px;
    border: 0.5vh dashed #6ed5fe;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    & div {
        font-size: 4vh;
    }
`;
const School = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    width: 90%;
    height: 32%;
    border-bottom: 1px solid lightgray;
`;
const Class = styled.div`
    display: flex;
    align-items: flex-end;
    width: 90%;
    height: 32%;
    border-bottom: 1px solid lightgray;
    & div {
        display: flex;
        justify-content: flex-end;
        width: 33%;
    }
`;
const Name = styled.div`
    display: flex;
    align-items: flex-end;
    width: 90%;
    height: 33%;
`;

const FlipPageBack = keyframes`
  0% {
    transform: rotate3d(0, 1, 0, 90deg);
  }
  50% {
    transform: rotate3d(0, 1, 0, 180deg);
  }
  100% {
    transform: rotate3d(0, 1, 0, 180deg);
  }`;

const DiaryBookBack = styled.div`
    position: absolute;
    background-color: #6ed5fe;
    width: 50%;
    height: 95vh;
    border-radius: 3vh;
    bottom: -10vh;
    z-index: 89;
    transform-origin: 0 100%;
    animation: ${FlipPageBack} 2s 0s 2s infinite linear alternate;
`;
const DiaryPage = styled.div`
    position: absolute;
    background-color: white;
    width: 50%;
    height: 95vh;
    border-radius: 3vh;
    bottom: -10vh;
    right: ${(props) => 51 - props.number * 0.5}vh;
    box-shadow: 0.2vh 0.7vh 0.5vh #0000002b;
    z-index: ${(props) => 10 - props.number};
`;
export default Diary;
