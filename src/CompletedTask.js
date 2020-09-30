import React from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "./CompletedTask.css";
import CompletedCard from "./CompletedCard";

export default function CompletedTask({ todoItems }) {
  return (
    <div className="completedTask">
      <div className="completedTask-title">
        <div className="completedTask-titleContent">
          Todo <ExpandMoreIcon />
        </div>
      </div>

      <div className="completedTask-subtitle">
        <div className="completedTask-titleForSubtitle">
          What's on <b>Today</b>
        </div>
        <div className="completedTask-count">{todoItems.length}</div>
      </div>

      {todoItems.map(
        (data) => (data.isCompleted && <CompletedCard key={data.index} description={data.description} date={data.date} />)
      )}
    </div>
  );
}
