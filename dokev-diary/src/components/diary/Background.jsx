import styled from "styled-components";
// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

const Background = () => {
    return (
        <Back>
            <Eraser src="./img/eraser.png" />
            <Pencil src="./img/pencil.png" />
            <Sticker1 src="./img/sticker1.png" />
            <Sticker2 src="./img/sticker2.png" />
        </Back>
    );
};

const Back = styled.div`
    position: absolute;
    background-color: #e1caae;
    width: 100%;
    height: 100vh;
    overflow: hidden;
`;
const Eraser = styled.img`
    position: absolute;
    height: 23vh;
    right: 10vh;
    top: 25vh;
    transform: rotate(10deg);
`;
const Pencil = styled.img`
    position: absolute;
    height: 75vh;
    right: 30vh;
    bottom: -20vh;
    transform: rotate(353deg);
`;
const Sticker1 = styled.img`
    position: absolute;
    height: 40vh;
    bottom: -10vh;
    transform: rotate(353deg);
`;
const Sticker2 = styled.img`
    position: absolute;
    height: 23vh;
    bottom: 20vh;
    left: 30vh;
`;
export default Background;
