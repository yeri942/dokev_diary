import styled from "styled-components";
// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

const Diary = () => {
    return (
        <DiaryArea>
            <DiaryBook></DiaryBook>
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
    height: 90vh;
    border-radius: 15px;
    bottom: -10vh;
`;
export default Diary;
