import React from 'react'
import "./CompletedCard.css"

import Checkbox from '@material-ui/core/Checkbox';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import DeleteIcon from '@material-ui/icons/Delete';

export default function CompletedCard({description, date}) {
    return (
        <div className="completedCard">
            <div className="completedCard-description">
                <div className="completedCard-descriptionTitle">
                    {description}
                </div>
                <div className="completedCard-descriptionExtra">
                    <div className="completedCard-timestamp">
                        <AccessTimeIcon/> <div>&nbsp;{date}</div>
                    </div>
                    <div className="completedCard-heartOrTrash">
                        <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />
                        <Checkbox icon={<DeleteOutlineIcon />} checkedIcon={<DeleteIcon />} name="checkedH" />
                    </div>
                </div>
            </div>
        </div>
    )
}
