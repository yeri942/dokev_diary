import { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { useRecoilState, useRecoilValue } from "recoil";
import { cardState, pageState } from "../../state/atoms";
import pageData from "../../data/pageData.json";
const Page = () => {
    const [card, setCard] = useRecoilState(cardState);
    const page = useRecoilValue(pageState);

    return (
        <div
            onClick={() => {
                setCard(!card);
            }}
            style={{
                overflow: "hidden",
                width: "100%",
                height: "100%",
                position: "relative",
            }}
        >
            <div>
                {pageData.day[page].src.map((ILN) => {
                    return (
                        <DIMG
                            src={"./img/diaryImg/" + ILN + ".png"}
                            key={ILN}
                            page={page}
                        />
                    );
                })}
                {/* <DIMG src="./img/diaryImg/day1P.png" alt="person" />
                        <DIMG src="./img/diaryImg/day1G.png" alt="seagull" /> */}
            </div>
        </div>
    );
};
const gMove0 = keyframes`
    0%{
        top:3vh;
    }
    100%{
        top:7vh;
    }
`;
const gMove1_1 = keyframes`
    0%{
        right:5vh;
        top:5vh;
        
    }
    100%{
        right:12vh;
        top:-10vh;
        transform: scale(0.7)
    }
`;
const gMove1_2 = keyframes`
    0%{
        left:7vh;
        top: 0vh;
    }
    50%{
        left:3vh;
        top:-3vh;
    }
    100%{
        left:-1vh;
        top:0vh;
    }
`;

const gMove2 = keyframes`
    0%{
        left:5vh;
        top:0vh;
    }
    10%{
        left:2vh;
    }
    16%{
        left:4vh;
        
    }
    33%{
        top:-5vh;
    }
    100%{
        left:5vh;
        top:-20vh;
    }
`;
const gMove3 = keyframes`
    0%{
        transform:rotate(0deg)
    }
    33%{
        transform:rotate(20deg)
    }
    66%{
        transform:rotate(0deg)
    }
    100%{
        transform:rotate(20deg)
    }

`;
const gMove4 = keyframes`
    0%{
        right:0vh;
        top:0vh;
    }
    20%{
        right:-2vh;
        top:-2vh;
    }
    40%{
        right:0vh;
        top:0vh;
    }
    60%{
        right:-2vh;
        top:-2vh;
    }
    80%{
        right:0vh;
        top:0vh;
    }

    100%{
        right:-2vh;
        top:-2vh;
    }
`;

const gMove5AD = keyframes`
    0%{
        opacity:0;
    }
    50%{
        opacity:0;
    }
    100%{
        opacity:1;
    }
`;
const gMove5H = keyframes`
    0%{
        transform:rotate(0deg);
        top:0;
        left:-10vh;
    }
    90%{
        transform:rotate(75deg);
        top:20vh;
        left: -5vh;
    }
    100%{
        transform:rotate(75deg);
        top:20vh;
        left: -5vh;
    }
`;

const DIMG = styled.img`
    position: absolute;
    width: 100%;
    height: 50vh;
    cursor: pointer;
    &:last-child {
        animation: ${(props) =>
                props.page === 0 ? gMove0 : props.page === 1 ? gMove1_2 : null}
            2s infinite ease-in-out alternate;
    }
    &:nth-child(2) {
        animation: ${(props) =>
                props.page === 1
                    ? gMove1_1
                    : props.page === 2
                    ? gMove2
                    : props.page === 3
                    ? gMove3
                    : props.page === 4
                    ? gMove4
                    : props.page === 5
                    ? gMove5AD
                    : null}
            3s infinite ease-in-out alternate;
    }
    &:nth-child(3) {
        animation: ${(props) => (props.page === 5 ? gMove5AD : null)} 3s
            infinite ease-in-out alternate;
    }
    &:nth-child(4) {
        animation: ${(props) => (props.page === 5 ? gMove5H : null)} 3s infinite
            ease-in-out alternate;
    }
`;

export default Page;
