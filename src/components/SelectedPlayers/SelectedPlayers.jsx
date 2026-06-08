import PurchaseDetailsCard from "../PurchaseDetailsCard/PurchaseDetailsCard";

const SelectedPlayers = ({ players, handleRemovePlayer, setToggle }) => {
  return (
    <div className="max-w-300 mx-auto">
      {players.map((player, index) => (
        <PurchaseDetailsCard
          key={index}
          player={player}
          handleRemovePlayer={handleRemovePlayer}
        ></PurchaseDetailsCard>
      ))}
      <button onClick={() => setToggle(true)} className="btn bg-[#E7FE29]">
        Add More Player
      </button>
    </div>
  );
};

export default SelectedPlayers;
