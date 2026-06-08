import { use } from "react";
import Player from "../Player/Player";
import "./AvailablePlayers.css";

const AvailablePlayers = ({
  playersPromise,
  availableBalance,
  setAvailableBalance,
}) => {
  const players = use(playersPromise);

  return (
    <div className="mt-10 players-card-container max-w-300 mx-auto">
      {players.map((player, index) => (
        <Player
          key={index}
          player={player}
          availableBalance={availableBalance}
          setAvailableBalance={setAvailableBalance}
        ></Player>
      ))}
    </div>
  );
};

export default AvailablePlayers;
