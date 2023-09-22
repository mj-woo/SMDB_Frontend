import { atom } from "recoil";

export const isShowSearchDefault = false;

export const isShowSearch = atom({
	key: `isShowSearch_${+new Date()}`,
	default: isShowSearchDefault,
});
