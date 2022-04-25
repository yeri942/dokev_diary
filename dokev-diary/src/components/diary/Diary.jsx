import styled from "styled-components";
// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

const Diary = () => {
    return (
        <DiaryArea>
            <DiaryBook>
                <AboutArea>
                    <About></About>
                </AboutArea>
            </DiaryBook>
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
    border-radius: 15px;
    bottom: -10vh;
    display: flex;
    justify-content: center;
`;
const AboutArea = styled.div`
    position: absolute;
    width: 50%;
    height: 25%;
    background-color: white;
    bottom: 12vh;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
`;
const About = styled.div`
    width: 93%;
    height: 85%;
    background-color: white;
    bottom: 12vh;
    border-radius: 15px;
    border: 0.5vh dashed #6ed5fe;
`;
export default Diary;
