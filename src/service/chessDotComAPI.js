import { GET_PLAYER_INFO_API } from "../static/constants/chessDotComConstants";

export const getPlayerProfile = async (username) => {
  return await fetch(GET_PLAYER_INFO_API(username))
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
    return await fetch(jsonResult.country)
      .then((countryResult) => {
        return countryResult.json();
      })
      .then((countryJson) => {
        return { ...jsonResult, countryJson };
      });
  }
};