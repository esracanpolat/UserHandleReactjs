import { atom, selector } from "recoil";

export const userState = atom({
    key: "userState",
    default:{
        users:[],
        userID:null
    },
  });
