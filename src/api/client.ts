import Axios from "axios";

const client = Axios.create({
  baseURL: "https://nesine-case-study.onrender.com",
});

export default client;
