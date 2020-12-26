export const MY_USER_NAME = "shivankmathur";

export const GET_PLAYER_INFO_API = (userName) =>
  "https://api.chess.com/pub/player/" + userName;
export const GET_PLAYER_STATS_API = (userName) =>
  "https://api.chess.com/pub/player/" + userName + "/stats";
