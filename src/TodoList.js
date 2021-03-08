import { useRecoilValue } from "recoil";
import { todoListState } from "./atoms/atoms";
import TodoItem from "./TodoItem";
import TodoItemCreator from "./TodoItemCreator";

function TodoList() {
  const todoList = useRecoilValue(todoListState);

  return (
    <>
      <TodoItemCreator />
      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
}

export default TodoList;
