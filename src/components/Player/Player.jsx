import { FaUserLarge } from "react-icons/fa6";
import { IoFlag } from "react-icons/io5";

const Player = ({ player, availableBalance, setAvailableBalance }) => {
  const {
    bating_style,
    bowling_style,
    player_country,
    player_image,
    player_name,
    playing_role,
    price,
    rating,
  } = player;
  const handleSelectedPlayers = (player) => {
    const playerPrice = parseInt(
      player.price.replaceAll(",", "").replace(/[^0-9.]/g, ""),
    );
    if (availableBalance < playerPrice) {
      alert("You don't have enough mone to buy this player");
      return;
    }
    setAvailableBalance(availableBalance - playerPrice);
  };
  return (
    <div>
      <div className="card bg-base-100 h-full shadow-sm">
        <figure className="px-6 pt-6">
          <img
            src={player_image}
            alt={`Image of ${player_name}`}
            className="rounded-xl"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            <span>
              <FaUserLarge />
            </span>
            {player_name}
          </h2>
          <div className="flex items-center justify-between pb-2 border-b border-gray-200">
            <p className="flex items-center gap-2 text-[#13131390]">
              <span>
                <IoFlag />
              </span>{" "}
              <span>{player_country}</span>
            </p>
            <span className="btn ">{playing_role}</span>
          </div>
          <p className="flex items-center justify-between">
            <span className="font-bold">Rating</span> <span>{rating}</span>
          </p>
          <p className="flex items-center justify-between py-2">
            <span className="font-bold">{bating_style}</span>{" "}
            <span>{bowling_style}</span>
          </p>
          <p className="flex items-center justify-between">
            <span className="font-bold">Price: $ ${price}</span>{" "}
            <span className="btn" onClick={() => handleSelectedPlayers(player)}>
              Choose Player
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Player;
