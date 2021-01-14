export const MY_USER_NAME = "shivankmathur";

export const GET_PLAYER_INFO_API = (userName) =>
  "https://api.chess.com/pub/player/" + userName;

export const GET_PLAYER_ARCHIVE_API = (userName, year, month) =>
  "https://api.chess.com/pub/player/" +
  userName +
  "/games/" +
  year +
  "/" +
  month;

export const GET_PLAYER_STATS_API = (userName) =>
  "https://api.chess.com/pub/player/" + userName + "/stats";

export const CHESS_COM_WIN = "1";

export const CHESS_COM_LOSS = "0";

export const CHESS_COM_DRAW = "1/2";

export const GET_GAME_RESULT = (result) => {
  switch (result) {
    case "win":
      return CHESS_COM_WIN;
    case "checkmated":
      return CHESS_COM_LOSS;
    case "agreed":
      return CHESS_COM_DRAW;
    case "repetition":
      return CHESS_COM_DRAW;
    case "timeout":
      return CHESS_COM_LOSS;
    case "resigned":
      return CHESS_COM_LOSS;
    case "stalemate":
      return CHESS_COM_DRAW;
    case "lose":
      return CHESS_COM_LOSS;
    case "insufficient":
      return CHESS_COM_DRAW;
    case "50move":
      return CHESS_COM_DRAW;
    case "abandoned":
      return CHESS_COM_LOSS;
    case "kingofthehill":
      return CHESS_COM_LOSS;
    case "threecheck":
      return CHESS_COM_LOSS;
    case "timevsinsufficient":
      return CHESS_COM_DRAW;
    case "bughousepartnerlose":
      return CHESS_COM_LOSS;
  }
};
