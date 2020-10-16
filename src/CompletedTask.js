import React from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "./CompletedTask.css";
import CompletedCard from "./CompletedCard";

export default function CompletedTask({ completedItems, setCompletedItems }) {
  return (
    <div className="completedTask">
      <div className="completedTask-title">
        <div className="completedTask-titleContent">
          Completed <ExpandMoreIcon />
        </div>
      </div>

      <div className="completedTask-subtitle">
        <div className="completedTask-titleForSubtitle">
          What's on <b>Today</b>
        </div>
        <div className="completedTask-count">{completedItems.length}</div>
      </div>
      {completedItems.map(
        (data) =>
          data.isCompleted && (
            <CompletedCard
              index={data.index}
              key={data.index}
              description={data.description}
              date={data.date}
              completedItems={completedItems}
              setCompletedItems={setCompletedItems}
              isHearted={data.isHearted}
            />
          )
      )}
    </div>
  );
}
