import { useInfiniteQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import APIClient, { FetchResponse } from "../services/api-client";
import { Platform } from "./usePlatforms";
// import useData from './useData'
// import { FetchResponse } from "./useData";
// import { useQuery } from "@tanstack/react-query";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

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

// const useGames = (gameQuery: GameQuery) =>
//   useQuery<FetchResponse<Game>, Error>({
//     queryKey: ["games", gameQuery],
//     queryFn: () =>
//       apiClient.getAll({
//         params: {
//           genres: gameQuery.genre?.id,
//           parent_platforms: gameQuery.platform?.id,
//           ordering: gameQuery.sortOrder,
//           search: gameQuery.searchText,
//         },
//       }),
//     staleTime: 60 * 60 * 1000,
//   });

type pageParam = { pageParam: number };

const useGames = (gameQuery: GameQuery) =>
  useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }: pageParam) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: 24 * 60 * 60 * 1000,
  });

export default useGames;
