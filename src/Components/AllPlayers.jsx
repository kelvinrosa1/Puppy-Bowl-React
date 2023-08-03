import { useState, useEffect } from "react";
import fetchAllPlayers from "../API";
import { useNavigate } from "react-router-dom";
import NewPlayerForm from "./NewPlayerForm";
import Searchbar from "./Searchbar";

function AllPlayers() {
  const [players, setPlayers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const allPlayers = await fetchAllPlayers();
        setPlayers(allPlayers.data.players);
      } catch (error) {
        console.error("Error fetching players:", error);
      }
    };

    fetchData();
  }, [players]);

  const handleSearch = (event) => {
    const searchValue = event.target.value;
    setSearchTerm(searchValue);
  };

  const filteredPlayers = players.filter((player) =>
    player.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <Searchbar onChange={handleSearch} />
      {filteredPlayers.map((player) => (
        <div key={player.id} className="allPlayers">
          <img src={`${player.imageUrl}`} alt={player.name} /><br />
          <h2>{player.name}</h2>
          <h4>{player.breed}</h4>
          <button onClick={() => navigate(`/players/${player.id}`)}>See Details</button>
        </div>
      ))}
      <NewPlayerForm />
    </div>
  );
}

export default AllPlayers;
