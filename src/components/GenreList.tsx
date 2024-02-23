import React from "react";
import useGenre from "../hooks/useGenres";

const GenreList = () => {
  const { genre, isLoading, error } = useGenre();

  return <div>GenreList</div>;
};

export default GenreList;
