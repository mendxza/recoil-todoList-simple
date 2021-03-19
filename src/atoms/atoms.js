import { atom, selector } from "recoil";

export const todoListState = atom({
  key: "ThisIsATest",
  default: [
    {
      id: 0,
      text: "BIIIIITCHHH",
      isComplete: false,
    },
    {
      id: 1,
      text: "YUUUCKKKK",
      isComplete: false,
    },
  ],
});

export const todoListFilterState = atom({
  key: "todoListFilterState",
  default: "Show All",
});

// new selector
export const filteredTodoListState = selector({
  key: "filteredTodoListState",
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    switch (filter) {
      case "Show Completed":
        return list.filter((item) => item.isComplete);
      case "Show Uncompleted":
        return list.filter((item) => !item.isComplete);
      default:
        return list;
    }
  },
});

export const todoListStatsState = selector({
  key: "todoListStatsState",
  get: ({ get }) => {
    const todoList = get(todoListState);
    const totalNum = todoList.length;
    const totalCompletedNum = todoList.filter((item) => item.isComplete).length;
    const totalUncompletedNum = totalNum - totalCompletedNum;
    const percentCompleted =
      totalNum === 0 ? 0 : (totalCompletedNum / totalNum) * 100;

    return {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
      percentCompleted,
    };
  },
});
