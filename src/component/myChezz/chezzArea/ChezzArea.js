import React from "react";
import "./ChezzArea.css";
import ChezzBoard from "./chezzBoard/ChezzBoard";
import PlayerArchive from "./playerArchive/PlayerArchive";
import PlayTabs from "./playTabs/PlayTabs";

function ChezzArea(props) {
  return (
    <div className="ChezzArea">
      <ChezzBoard position="start" />
      <PlayerArchive userName={props.userName} />
    </div>
  );
}

export default ChezzArea;
