import React, { useState } from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Button from "@material-ui/core/Button";
import "./Todo.css";
import TodoCard from "./TodoCard";
import moment from "moment";

export default function Todo() {
  const initialState = {
    description: "This is how your todo card is gonna be🔥",
    date: moment().format("lll"),
    isHearted: 0,
    timestamp: Date.now(),
  };
  const [todoItems, setTodoItems] = useState([initialState]);
  const [todoDescription, setTodoDescription] = useState("");

  const addTodo = () => {
    if(!todoDescription) return 0;
    setTodoItems([
      ...todoItems,
      {
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

      {todoItems.map((data) => (
        <TodoCard description={data.description} date={data.date} />
      ))}
    </div>
  );
}
