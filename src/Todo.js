import React from 'react'
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Button from "@material-ui/core/Button";
import "./Todo.css"
import TodoCard from './TodoCard';

export default function Todo() {
    return (
        <div className="todo">
            <div className="todo-title">
                <div className="todo-titleContent">
                    Todo <ExpandMoreIcon/>
                </div>
            </div>

            <div className="todo-subtitle">
                <div className="todo-titleForSubtitle">
                    What's on <b>Today</b>
                </div>
                <div className="todo-count">
                    5
                </div>
            </div>

            <form className="todo-form"> 
                <textarea type="text" placeholder="Type something"/>
                <Button>
                    ADD TO MY LIST
                </Button>
            </form>

            <TodoCard/>
            <TodoCard/>
            <TodoCard/>
            <TodoCard/>
            <TodoCard/>
            <TodoCard/>
            <TodoCard/>
        </div>
    )
}
