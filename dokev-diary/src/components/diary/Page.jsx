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
        >
            <div>
                {pageData.day[page].src.map((ILN) => {
                    console.log(ILN);
                    return (
                        <DIMG
                            src={"./img/diaryImg/" + ILN + ".png"}
                            key={ILN}
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
        animation: ${(props) => "gMove" + props.key} 1s infinite ease-in-out
            alternate;
    }
`;

export default Page;
