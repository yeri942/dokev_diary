import { useState } from "react";
import styled, { keyframes } from "styled-components";
import { useRecoilState } from "recoil";
import { cardState } from "../../state/atoms";
import pageData from "../../data/pageData.json";
const Page = () => {
    const [card, setCard] = useRecoilState(cardState);
    const [imgL, setImgL] = useState(0);
    const [imgList, setImgList] = useState([]);
    return (
        <div
            onClick={() => {
                setCard(!card);
            }}
        >
            {[0].map((n) => {
                setImgL(pageData.day[n].src.length);
                for (let index = 0; index < imgL; index++) {
                    setImgList(imgList.push(index));
                }
                console.log(imgList);
                return (
                    <div>
                        {imgList.map((ILN) => {
                            return (
                                <DIMG
                                    src={
                                        "./img/diaryImg/" +
                                        pageData.day[n].src[ILN] +
                                        ".png"
                                    }
                                    alt={pageData.day[n].alt[ILN]}
                                    key={ILN}
                                />
                            );
                        })}
                        {/* <DIMG src="./img/diaryImg/day1P.png" alt="person" />
                        <DIMG src="./img/diaryImg/day1G.png" alt="seagull" /> */}
                    </div>
                );
            })}
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
