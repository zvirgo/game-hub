import axios from "axios";
export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "61dc437af6cf4a1a88a86d321d076c43",
  },
});
