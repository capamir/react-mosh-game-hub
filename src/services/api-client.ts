import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "d62f3d2d59784569bd211152f3fc88e4",
  },
});
