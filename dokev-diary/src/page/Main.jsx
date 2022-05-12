import React from "react";
import styled from "styled-components";
import Background from "../components/Background";
import Diary from "../components/diary/Diary";

const Main = () => {
    return (
        <HomePageBlock>
            <Background />
            <Diary />
        </HomePageBlock>
    );
};

const HomePageBlock = styled.div``;

export default Main;
