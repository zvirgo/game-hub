import useGames from "../hook/useGenre";
const GenresList = () => {
  const { genres, error, isLoading } = useGames();
  return (
    <div>
      <ul>
        {genres.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default GenresList;
