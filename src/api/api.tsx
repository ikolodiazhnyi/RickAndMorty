import axios from "axios";
import { ArrayOfCharacters } from "../types/types";

const axiosInstance = axios.create({
  baseURL: "https://rickandmortyapi.com/api/",
});

type getCharactersResponseType = {
  results: ArrayOfCharacters;
};

export const charactersAPI = {
  getCharacters(id:number) {
    return axiosInstance
      .get<getCharactersResponseType>(`character/?page=${id}`)
      .then((response) => response.data.results);
  },
};

export const characterAPI = {
  getCharacter(id: string) {
    return axiosInstance.get(`character/${id}`).then((response) => response.data);
  },
};
