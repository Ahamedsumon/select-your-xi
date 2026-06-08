import { RiDeleteBinLine } from "react-icons/ri";

const PurchaseDetailsCard = ({ player, handleRemovePlayer }) => {
  const { player_image, player_name, playing_role } = player;

  return (
    <div>
      <div className="list  rounded-box ">
        <div className="list-row my-3  border border-base-200">
          <div>
            <img className="size-15 rounded-box" src={player_image} />
          </div>
          <div>
            <h3 className="text-2xl font-bold">{player_name}</h3>
            <div className="text-gray-400 font-bold pt-1 pl-1">
              {playing_role}
            </div>
          </div>
          <button
            onClick={() => handleRemovePlayer(player_name)}
            className="btn btn-square btn-ghost text-2xl text-red-500"
          >
            <RiDeleteBinLine />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PurchaseDetailsCard;
