import React from "react";
import "./CompletedCard.css";

import Checkbox from "@material-ui/core/Checkbox";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import DeleteIcon from "@material-ui/icons/Delete";

export default function CompletedCard({ description, date, completedItems, setCompletedItems, index }) {
  const heartItem = () => {
    let currentItem = completedItems.filter((value) => value.index === index);
    if (!currentItem[0].isHearted) currentItem[0].isHearted = 1;
    else currentItem[0].isHearted = !1;
    console.log(currentItem);
  };

  const deleteItem = () => {
    let currentItem = completedItems.filter((value) => value.index === index);
    if (!currentItem[0].isHearted) {
      let updatedItems = completedItems.filter((value) => value.index !== index);
      setCompletedItems(updatedItems);
    }
  };
  return (
    <div className="completedCard">
      <div className="completedCard-description">
        <div className="completedCard-descriptionTitle">{description}</div>
        <div className="completedCard-descriptionExtra">
          <div className="completedCard-timestamp">
            <AccessTimeIcon /> <div>&nbsp;{date}</div>
          </div>
          <div className="completedCard-heartOrTrash">
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite />}
              onChange={() => heartItem()}
              name="checkedH"
            />
            <Checkbox
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
