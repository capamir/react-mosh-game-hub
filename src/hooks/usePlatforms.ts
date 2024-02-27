// import useData from "./useData";
// import platforms from "../data/platforms";
import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import platforms from "../data/platforms";
// import { FetchResponse } from "./useData";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const apiClient = new APIClient("/platforms/lists/parents");

// const usePlatforms = () => useData<Platform>("/platforms/lists/parents");
// const usePlatforms = () => ({ data: platforms, isLoading: false, error: null });
const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000,
    initialData: platforms,
  });

export default usePlatforms;
