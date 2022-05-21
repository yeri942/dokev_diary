import { atom } from "recoil";

export const pageState = atom({
    key: "pageState",
    default: 0,
});

export const cardState = atom({
    key: "cardState",
    default: false,
});
