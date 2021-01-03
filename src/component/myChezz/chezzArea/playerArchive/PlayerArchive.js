import React, { useEffect, useState } from "react";
import { getPlayerArchive } from "../../../../service/chessDotComAPI";
import "./PlayerArchive.css";

function PlayerArchive(props) {
  const getMonthInMM = (month) =>
    month + 1 < 10 ? "0" + (month + 1) : month + 1;
  const [playerGames, setPlayerGames] = useState([]);
  const [archiveMonth, setArchiveMonth] = useState(
    getMonthInMM(new Date().getUTCMonth())
  );
  const [archiveYear, setArchiveYear] = useState(new Date().getFullYear());
  const { userName } = props;

  useEffect(() => {
    getPayerGames();
  }, []);

  useEffect(() => {
    getPayerGames();
  }, [userName]);

  const getPayerGames = async () => {
    let playerArchive = await getPlayerArchive(
      userName,
      archiveYear,
      archiveMonth
    );
  };
  return <div className="PlayerArchive"></div>;
}

export default PlayerArchive;
