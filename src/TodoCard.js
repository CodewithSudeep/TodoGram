import React from 'react'
import "./TodoCard.css"

import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import DeleteIcon from '@material-ui/icons/Delete';

export default function TodoCard() {
    return (
        <div className="todoCard">
            <div className="todoCard-checkbox">
            <Checkbox
            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
            checkedIcon={<CheckBoxIcon fontSize="small" />}
            name="checkedI"
          />
            </div>
            <div className="todoCard-description">
                <div className="todoCard-descriptionTitle">
                    Do the Dishes by Tonight i.e. for preparation of Birthday.
                </div>
                <div className="todoCard-descriptionExtra">
                    <div className="todoCard-timestamp">
                        <AccessTimeIcon/> <div>2020-09-25</div>
                    </div>
                    <div className="todoCard-heartOrTrash">
                        <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />
                        <Checkbox icon={<DeleteOutlineIcon />} checkedIcon={<DeleteIcon />} name="checkedH" />
                    </div>
                </div>
            </div>
        </div>
    )
}
