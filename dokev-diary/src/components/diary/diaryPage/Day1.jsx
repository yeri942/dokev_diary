import { useState } from "react";
import styled, { keyframes } from "styled-components";
import { useRecoilState } from "recoil";
import { cardState } from "../../../state/atoms";

const Page1 = () => {
    const [card, setCard] = useRecoilState(cardState);
    return (
        <div>
            <D1IMG src="./img/diaryImg/day1BG.png" alt="background" />
            <D1IMG src="./img/diaryImg/day1P.png" alt="person" />
            <D1IMG
                src="./img/diaryImg/day1G.png"
                alt="seagull"
                onClick={() => {
                    setCard(!card);
                }}
            />
        </div>
    );
};
const gMove = keyframes`
    0%{
        top:12vh;
    }
    100%{
        top:15vh;
    }
`;
const D1IMG = styled.img`
    position: absolute;
    width: 89.5%;
    height: 50vh;
    cursor: pointer;
    &:last-child {
        animation: ${gMove} 1s infinite ease-in-out alternate;
    }
`;

export default Page1;
