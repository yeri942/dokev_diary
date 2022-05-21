import styled from "styled-components";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { pageState, cardState } from "../../state/atoms";

const Card = () => {
    const page = useRecoilValue(pageState);
    const card = useRecoilValue(cardState);

    return (
        <div>
            <CardArea
                src="./img/cardImg/card1.png"
                style={{
                    transform: card ? "rotate(20deg)" : "rotate(0deg)",
                    right: card ? "5vh" : "50vh",
                }}
            ></CardArea>
        </div>
    );
};
const CardArea = styled.img`
    position: absolute;
    width: 50vh;
    height: 30vh;
    background-color: black;
    border-radius: 2vh;
    bottom: 10vh;
    object-fit: cover;
    transition-duration: 0.7s;
`;
export default Card;
