import { use } from "react";
import Player from "../Player/Player";
import "./AvailablePlayers.css"

const AvailablePlayers = ({playersPromise}) => {
    const players = use(playersPromise)
    console.log(players);
    return (
        <div className="mt-10 players-card-container max-w-[1200px] mx-auto">
           {
            players.map((player, index)=> <Player key={index} player={player}></Player>)
           }
        </div>
    );
};

export default AvailablePlayers;