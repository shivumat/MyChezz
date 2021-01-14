import React from "react";
import { GET_GAME_RESULT } from "../../../../../static/constants/chessDotComConstants";
import "./PlayerGame.css";

function PlayerGame(props) {
  const { game } = props;

  const gameCLick = () => console.log(game);

  return (
    <div className="PlayerGame" onClick={gameCLick}>
      <div className="playerIds">
        <div className="whitePlayer">
          <div className="playerColor">
            <div className="whiteBlock"></div>
          </div>
          <div className="playerIdBlock">
            <span className="playerId">{game.white.username}</span>
          </div>
          <div className="playerResult">
            {GET_GAME_RESULT(game.white.result)}
          </div>
        </div>
        <div className="blackPlayer">
          <div className="playerColor">
            <div className="blackBlock"></div>
          </div>
          <div className="playerIdBlock">
            <span className="playerId">{game.black.username}</span>
          </div>
          <div className="playerResult">
            {GET_GAME_RESULT(game.black.result)}
          </div>
        </div>
      </div>
      <div className="gameResult">WIN</div>
    </div>
  );
}

export default PlayerGame;
