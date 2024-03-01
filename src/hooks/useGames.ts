import { useQuery } from "@tanstack/react-query";
import Game from "../entities/Game";
import APIClient, { FetchResponse } from "../services/api-client";
import useGameQueryStore from "../store";

const apiClient = new APIClient<Game>("games");

// const useGames = (gameQuery: GameQuery) =>
//   useData<Game>(
//     "/games",
//     {
//       params: {
//         genres: gameQuery.genre?.id,
//         platforms: gameQuery.platform?.id,
//         ordering: gameQuery.sortOrder,
//         search: gameQuery.searchText,
//       },
//     },
//     [gameQuery]
//   );

const useGames = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);

  return useQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
        },
      }),
    staleTime: 60 * 60 * 1000,
  });
};

// const useGames = () => {
//   const gameQuery = useGameQueryStore((s) => s.gameQuery);

//   return useInfiniteQuery<FetchResponse<Game>, Error>({
//     queryKey: ["games", gameQuery],
//     queryFn: ({ pageParam = 1 }) =>
//       apiClient.getAll({
//         params: {
//           genres: gameQuery.genreId,
//           parent_platforms: gameQuery.platformId,
//           ordering: gameQuery.sortOrder,
//           search: gameQuery.searchText,
//           page: pageParam,
//         },
//       }),
//     getNextPageParam: (lastPage, allPages) => {
//       return lastPage.next ? allPages.length + 1 : undefined;
//     },
//     staleTime: ms("24h"),
//   });
// };

export default useGames;
