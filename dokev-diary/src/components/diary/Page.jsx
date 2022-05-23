import { useState } from "react";
import styled, { keyframes } from "styled-components";
import { useRecoilState } from "recoil";
import { cardState } from "../../state/atoms";
import pageData from "../../data/pageData.json";
const Page = () => {
    const [card, setCard] = useRecoilState(cardState);
    return (
        <div
            onClick={() => {
                setCard(!card);
            }}
        >
            {[0].map((n) => {
                return (
                    <div>
                        {pageData.day[n].src.map((srcL) => {
                            return (
                                <DIMG
                                    src={"./img/diaryImg/" + srcL + ".png"}
                                    alt={pageData.day[n].alt[]}
                                />
                            );
                        })}
                        <DIMG src="./img/diaryImg/day1P.png" alt="person" />
                        <DIMG src="./img/diaryImg/day1G.png" alt="seagull" />
                    </div>
                );
            })}
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
const DIMG = styled.img`
    position: absolute;
    width: 89.5%;
    height: 50vh;
    cursor: pointer;
    &:last-child {
        animation: ${gMove} 1s infinite ease-in-out alternate;
    }
`;

export default Page;
