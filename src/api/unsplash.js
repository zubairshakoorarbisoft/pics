import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 383c80b11dfa5f6c5c86433762751fa44150320454937fa85a071a5ae745c977"
  }
});
