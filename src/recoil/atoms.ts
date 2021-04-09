import { atom } from "recoil";

export const numbersState = atom({
  key: "numbersState",
  default: [] as number[],
});

export const numbersFilterState = atom({
  key: "numbersFilterState",
  // "all", "odd", "even" が入る
  default: "all",
});
