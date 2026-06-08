import PurchaseDetailsCard from "../PurchaseDetailsCard/PurchaseDetailsCard";

const SelectedPlayers = ({ players, handleRemovePlayer }) => {
  return (
    <div className="max-w-300 mx-auto">
      {players.map((player, index) => (
        <PurchaseDetailsCard
          key={index}
          player={player}
          handleRemovePlayer={handleRemovePlayer}
        ></PurchaseDetailsCard>
      ))}
    </div>
  );
};

export default SelectedPlayers;
