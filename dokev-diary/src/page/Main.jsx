import React from "react";
import styled from "styled-components";
import Background from "../components/Background";
import Diary from "../components/diary/Diary";
import Card from "../components/diary/Card";
import { useRecoilValue } from "recoil";
import { cardState } from "../state/atoms";

const Main = () => {
    const card = useRecoilValue(cardState);
    return (
        <HomePageBlock>
            <Background />
            <Diary />
            <Card />
        </HomePageBlock>
    );
};

const HomePageBlock = styled.div``;

export default Main;
