import { useEffect, useState } from "react";
import styled from "styled-components";
// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

const Diary = () => {
    const [mouseStateOnCover, setMouseStateOnCover] = useState(0);
    const [coverState, setCoverState] = useState(false);
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
                onClick={() => {
                    setCoverState(true);
                }}
                style={{
                    transform: coverState
                        ? "rotate3d(0, 1, 0, 90deg)"
                        : mouseStateOnCover === 1
                        ? "rotate3d(0, 1, 0, 20deg)"
                        : "rotate3d(0, 1, 0, 0deg)",
                    boxShadow:
                        mouseStateOnCover === 0
                            ? "none"
                            : "4vh 3vh 1vh #00000055",
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
            <DiaryBookBack
                style={{
                    transform: coverState
                        ? "rotate3d(0, 1, 0, 180deg)"
                        : "rotate3d(0, 1, 0, 90deg)",
                }}
            ></DiaryBookBack>
            {[0, 1, 2, 3].map((n) => {
                return <DiaryPage key={n} number={n} />;
            })}
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
    transition-duration: 0.7s;
    cursor: pointer;
`;

const AboutArea = styled.div`
    position: absolute;
    width: 50%;
    height: 25%;
    background-color: white;
    bottom: 12vh;
    border-radius: 2vh;
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
    border-radius: 2vh;
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
    border-bottom: 0.1vh solid lightgray;
`;
const Class = styled.div`
    display: flex;
    align-items: flex-end;
    width: 90%;
    height: 32%;
    border-bottom: 0.1vh solid lightgray;
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

const DiaryBookBack = styled.div`
    position: absolute;
    background-color: #40a9d3;
    width: 50%;
    height: 95vh;
    border-radius: 3vh;
    bottom: -10vh;
    z-index: 89;
    transform-origin: 0 100%;
    transition-duration: 1.3s;
    transition-delay: 0.6s;
    transition-timing-function: cubic-bezier(0.5, 0.5, 0.5, 0.5);
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
