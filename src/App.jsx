import { Suspense } from "react";
import "./App.css";
import AvailablePlayers from "./components/AvailablePlayers/AvailablePlayers";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

const fetchPlayers = async() => {
  const res = await fetch('/data.json');
  return res.json()
}



function App() {
  const playersPromise = fetchPlayers()
  return (
    <>
      <Header></Header>

      <Hero></Hero>
      <Suspense fallback={<span className="loading loading-dots loading-md"></span>}>
        <AvailablePlayers playersPromise={playersPromise}></AvailablePlayers>
      </Suspense>
    </>
  );
}

export default App;
