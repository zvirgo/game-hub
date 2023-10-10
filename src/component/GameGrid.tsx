
import useGames from "../hook/useGame";


const GameGrid = () => {
  const {games,error}=useGames()

  return (
    <>
      {error && <p>{error}</p>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
