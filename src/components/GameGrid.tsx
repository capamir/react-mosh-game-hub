import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames, { Platform } from "../hooks/useGames";
import { GameCard, GameCardContainer, GameCardSkeleton } from "./index";
import { Genre } from "../hooks/useGenres";

interface Props {
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;
}

const GameGrid: React.FC<Props> = ({ selectedGenre, selectedPlatform }) => {
  const { data, isLoading, error } = useGames(selectedGenre, selectedPlatform);
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      padding="10px"
      spacing={3}
    >
      {isLoading ? (
        skeletons.map((skeleton) => (
          <GameCardContainer key={skeleton}>
            <GameCardSkeleton />
          </GameCardContainer>
        ))
      ) : error ? (
        <Text>{error}</Text>
      ) : (
        data.map((game) => (
          <GameCardContainer>
            <GameCard key={game.id} game={game} />
          </GameCardContainer>
        ))
      )}
    </SimpleGrid>
  );
};

export default GameGrid;
