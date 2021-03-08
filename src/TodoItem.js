import { useRecoilState } from "recoil";
import { todoListState } from "./atoms/atoms";

// helper function to alter values on obj at index
function replaceItemAtIndex(arr, index, newValue) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

// removes obj from index of array
function removeItemAtIndex(arr, index) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}

// Todo Item component with functionality
function TodoItem({ item }) {
  const [todoList, setTodoList] = useRecoilState(todoListState);

  // gives the index of the obj to be refrenced when helpers are envoked
  const index = todoList.findIndex((listItem) => listItem === item);

  // edits the text field of the obj at index with help from helper func
  const editItemText = ({ target: { value } }) => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      text: value,
    });
    setTodoList(newList);
  };

  // changes the isCoimplete field of the obj at index with help from helper func
  const toggleItemComplete = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      isComplete: !item.isComplete,
    });
    setTodoList(newList);
  };

  const deleteItem = () => {
    const newList = removeItemAtIndex(todoList, index);
    setTodoList(newList);
  };

  return (
    <div>
      <input type="text" value={item.text} onChange={editItemText} />
      <input
        type="checkbox"
        checked={item.isComplete}
        onChange={toggleItemComplete}
      />
      <button onClick={deleteItem}>X</button>
    </div>
  );
}

export default TodoItem;
