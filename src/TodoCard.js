import React, { useState } from "react";
import "./TodoCard.css";

import Checkbox from "@material-ui/core/Checkbox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import DeleteIcon from "@material-ui/icons/Delete";

export default function TodoCard({
  description,
  date,
  setTodoItems,
  index,
  todoItems,
  completedItems,
  setCompletedItems,
}) {

  const[disable, setDisable] = useState(0);
  // function to change the completed Items
  const updateItems = () => {
    let updatedItems = todoItems.filter((value) => value.index !== index);
    let currentItem = todoItems.filter((value) => value.index === index);
    currentItem[0].isCompleted = 1;

    setCompletedItems([...completedItems, currentItem[0]]);

    setTodoItems(updatedItems);
  };

  // function to delete current item
  const deleteItem = () => {
    let currentItem = todoItems.filter((value) => value.index === index);
    if (!currentItem[0].isHearted) {
      let updatedItems = todoItems.filter((value) => value.index !== index);
      setTodoItems(updatedItems);
    }
  };

  // function to make the item hearted
  const heartItem = () => {
    let currentItem = todoItems.filter((value) => value.index === index);
    if (!currentItem[0].isHearted){
        currentItem[0].isHearted = 1;
        setDisable(!disable);
    }
    else{
      currentItem[0].isHearted = !1;
      setDisable(!disable);
    } 

    console.log(currentItem);
  };
  return (
    <div className="todoCard">
      <div className="todoCard-checkbox">
        <Checkbox
          icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
          checkedIcon={<CheckBoxIcon fontSize="small" />}
          name="checkedI"
          onChange={() => updateItems()}
        />
      </div>
      <div className="todoCard-description">
        <div className="todoCard-descriptionTitle">{description}</div>
        <div className="todoCard-descriptionExtra">
          <div className="todoCard-timestamp">
            <AccessTimeIcon /> <div>&nbsp;{date}</div>
          </div>
          <div className="todoCard-heartOrTrash">
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite />}
              name="checkedH"
              onChange={() => heartItem()}
            />
            <Checkbox
              disabled={disable}
              icon={<DeleteOutlineIcon />}
              checkedIcon={<DeleteIcon />}
              name="checkedH"
              onChange={() => deleteItem()}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
