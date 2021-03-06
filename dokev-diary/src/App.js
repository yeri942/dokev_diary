// import { Route, Routes } from "react-router-dom";
// import styled from "styled-components";
import "./App.css";
import Main from "./page/Main";
import { RecoilRoot } from "recoil";

function App() {
    return (
        <RecoilRoot>
            <Main />;
        </RecoilRoot>
    );
}

export default App;
