import React, { useState } from "react";
import "./CompletedCard.css";

//material ui components
import Checkbox from "@material-ui/core/Checkbox";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import DeleteIcon from "@material-ui/icons/Delete";


export default function CompletedCard({ description, date, completedItems, setCompletedItems, index, isHearted }) {
  const [isFav, setisFav] = useState(isHearted);
  const heartItem = () => {
    let currentItem = completedItems.filter((value) => value.index === index); //gets the selected item.
    if (!currentItem[0].isHearted){
      currentItem[0].isHearted = 1; //heart it
    } 
    else{
      currentItem[0].isHearted = !1; 
    } 
    // changes heart & un-heart's icons also toggle between enable & disable 
    // state for delete icon accordingly
    setisFav(!isFav); 
  };

  const deleteItem = () => {
    let currentItem = completedItems.filter((value) => value.index === index); //gets the selected item
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
              checked={ isFav }
            />
            <Checkbox
              disabled={ isFav }
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
