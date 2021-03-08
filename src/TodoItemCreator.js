import { useSetRecoilState } from "recoil";
import { todoListState } from "./atoms/atoms";
import { useState } from "react";

// helper function to increment a value to use as ID
function adder() {
  let num = 0;
  function numAdder() {
    return num++;
  }
  return numAdder;
}
// using closure to keep value persistent
const getId = adder();

// react component to add todo items
function TodoItemCreator() {
  const [inputValue, setInputValue] = useState("");
  // bring in state of todo list and apply setter hook
  const setTodolist = useSetRecoilState(todoListState);

  // sets new todo items into the atom state of todo list
  const addTodoItem = () => {
    setTodolist((oldTodoList) => [
      ...oldTodoList,
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
      },
    ]);
    // resets input field for next todo item
    setInputValue("");
  };

  // change handler to add values to inputValue
  const onChange = ({ target: { value } }) => {
    setInputValue(value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={onChange} />
      <button onClick={addTodoItem}>Add</button>
    </div>
  );
}

export default TodoItemCreator;
