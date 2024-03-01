import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { GridItem, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import { ExpandableText, GameAttributes } from "../components";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (error) throw error;

  return (
    <>
      {isLoading && <Spinner />}
      {game && (
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
          <GridItem>
            <Heading>{game.name}</Heading>
            <ExpandableText children={game.description_raw} />
            <GameAttributes game={game} />
          </GridItem>
        </SimpleGrid>
      )}
    </>
  );
};

export default GameDetailPage;