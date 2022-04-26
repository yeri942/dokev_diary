import styled from "styled-components";
// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

const Diary = () => {
    return (
        <DiaryArea>
            <DiaryBook>
                <Logo src="./img/logo.jpg" />
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
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
`;
const AboutArea = styled.div`
    position: absolute;
    width: 50%;
    height: 25%;
    background-color: white;
    bottom: 12vh;
    border-radius: 15px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
`;
const Logo = styled.img`
    width: 50%;
    top: 10vh;
    position: absolute;
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
