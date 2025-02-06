import { atom } from "recoil";

const userAtom = atom({
  key: "user",
  default: JSON.parse(localStorage.getItem("user-devin"))
})

export default userAtom;