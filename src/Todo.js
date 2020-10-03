import React from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Button from "@material-ui/core/Button";
import "./Todo.css";
import TodoCard from "./TodoCard";
import moment from "moment";

export default function Todo({
  todoItems,
  setTodoItems,
  todoDescription,
  setTodoDescription,
  completedItems,
  setCompletedItems,
}) {
  const addTodo = () => {
    if (!todoDescription) return 0;
    setTodoItems([
      ...todoItems,
      {
        index: Date.now(),
        description: todoDescription,
        date: moment().format("lll"),
        isHearted: 0,
        timestamp: Date.now(),
      },
    ]);

    setTodoDescription("");
  };
  return (
    <div className="todo">
      <div className="todo-title">
        <div className="todo-titleContent">
          Todo <ExpandMoreIcon />
        </div>
      </div>

      <div className="todo-subtitle">
        <div className="todo-titleForSubtitle">
          What's on <b>Today</b>
        </div>
        <div className="todo-count">{todoItems.length}</div>
      </div>

      <form className="todo-form">
        <textarea
          type="text"
          placeholder="Type something"
          value={todoDescription}
          onChange={(e) => setTodoDescription(e.target.value)}
        />
        <Button onClick={() => addTodo()}>ADD TO MY LIST</Button>
      </form>

      {todoItems.map(
        (data) =>
          !data.isCompleted && (
            <TodoCard
              key={data.index}
              description={data.description}
              date={data.date}
              setTodoItems={setTodoItems}
              index={data.index}
              todoItems={todoItems}
              completedItems={completedItems}
              setCompletedItems={setCompletedItems}
            />
          )
      )}
    </div>
  );
}
