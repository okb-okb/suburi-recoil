import { selector } from "recoil";
import { numbersState, numbersFilterState } from "./atoms";

export const filteredNumbersState = selector({
  key: "filteredNumbersState",
  get: ({ get }) => {
    const filter = get(numbersFilterState);
    const numbers = get(numbersState);

    switch (filter) {
      case "odd":
        return numbers.filter((number) => number % 2 !== 0);
      case "even":
        return numbers.filter((number) => number % 2 === 0);
      default:
        return numbers;
    }
  },
});
