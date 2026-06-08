import { Suspense, useState } from "react";
import "./App.css";
import AvailablePlayers from "./components/AvailablePlayers/AvailablePlayers";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import SelectedPlayers from "./components/SelectedPlayers/SelectedPlayers";

const fetchPlayers = async () => {
  const res = await fetch("/data.json");
  return res.json();
};
const playersPromise = fetchPlayers();
function App() {
  const [toggle, setToggle] = useState(true);
  const [availableBalance, setAvailableBalance] = useState(1000000);
  const [players, setPlayers] = useState([]);

  const handlePlayersData = (player) => {
    const newPlayer = [...players, player];
    setPlayers(newPlayer);
    console.log("Player to be added", player);
  };

  const handleRemovePlayer = (playerName) => {
    const newPlayers = players.filter(
      (player) => player.player_name !== playerName,
    );
    setPlayers(newPlayers);
  };
  return (
    <>
      <Header availableBalance={availableBalance}></Header>

      <Hero></Hero>
      <div className=" flex items-center justify-between">
        <h2 className="text-2xl font-bold">
          {toggle ? "Available Players" : "Selected Players"}
        </h2>
        <div className="font-bold">
          <button
            onClick={() => setToggle(true)}
            className={`py-2 px-4 border border-gray-200 rounded-l-2xl border-r-0 ${toggle ? "bg-[#E7FE29]" : "bg-none"} cursor-pointer`}
          >
            Available
          </button>
          <button
            onClick={() => setToggle(false)}
            className={`py-2 px-4 border border-gray-200 rounded-r-2xl ${toggle ? "bg-none" : "bg-[#E7FE29]"} border-l-0 cursor-pointer`}
          >
            Selected <span>({players.length})</span>
          </button>
        </div>
      </div>
      {toggle ? (
        <Suspense
          fallback={
            <p className="text-center">
              <span className=" loading loading-dots loading-md"></span>
            </p>
          }
        >
          <AvailablePlayers
            playersPromise={playersPromise}
            availableBalance={availableBalance}
            setAvailableBalance={setAvailableBalance}
            handlePlayersData={handlePlayersData}
          ></AvailablePlayers>
        </Suspense>
      ) : (
        <SelectedPlayers
          players={players}
          handleRemovePlayer={handleRemovePlayer}
        ></SelectedPlayers>
      )}
    </>
  );
}

export default App;
