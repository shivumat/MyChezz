import {
  GET_PLAYER_INFO_API,
  GET_PLAYER_ARCHIVE_API,
} from "../static/constants/chessDotComConstants";

const proxyurl = "https://cors-anywhere.herokuapp.com/";

export const getPlayerArchive = async (userName, year, month) => {
  return await fetch(proxyurl + GET_PLAYER_ARCHIVE_API(userName, year, month))
    .then((result) => {
      if (result.status !== 200) {
        return undefined;
      }
      return result.json();
    })
    .then(
      (jsonResult) => jsonResult,
      (error) => undefined
    );
};

export const getPlayerProfile = async (username) => {
  return await fetch(proxyurl + GET_PLAYER_INFO_API(username))
    .then((result) => {
      if (result.status !== 200) {
        return undefined;
      }
      return result.json();
    })
    .then(
      async (jsonResult) => await getPlayerInfoWithCountry(jsonResult),
      (error) => undefined
    );
};

const getPlayerInfoWithCountry = async (jsonResult) => {
  if (jsonResult === undefined || jsonResult.country === undefined) {
    return jsonResult;
  } else {
    return await fetch(proxyurl + jsonResult.country)
      .then((countryResult) => {
        return countryResult.json();
      })
      .then((countryJson) => {
        return { ...jsonResult, countryJson };
      });
  }
};
