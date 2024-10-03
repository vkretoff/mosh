import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "9f739e570ef84153b0750d95cee1222d",
  },
});
