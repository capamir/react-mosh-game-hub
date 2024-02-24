import useGenre from "../hooks/useGenres";

const GenreList = () => {
  const { genre, isLoading, error } = useGenre();

  return <div>hi</div>;
};

export default GenreList;
