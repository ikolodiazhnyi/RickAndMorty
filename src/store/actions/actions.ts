import {
  ActionsType,
  ArrayOfCharacters,
  CharacterType,
  SetCharactersType,
  SetCharacterType,
  FetchCharacterType,
  FetchCharactersType,
} from "../../types/types";

export const  fetchCharactersFailed = (message: string) => ({
  type: ActionsType.FETCH_CHARACTERS_REQUEST_FAILED,
  payload: message
})

export const setCharacters = (
  characters: ArrayOfCharacters
): SetCharactersType => ({
  type: ActionsType.SET_CHARACTERS,
  payload: characters,
});

export const fetchCharacters = (pageId:number): FetchCharactersType => ({
  type: ActionsType.FETCH_CHARACTERS_REQUEST,
  payload: pageId
});

export const setCharacter = (character: CharacterType): SetCharacterType => ({
  type: ActionsType.SET_CHARACTER,
  payload: character,
});

export const fetchCharacter = (id: string): FetchCharacterType => ({
  type: ActionsType.FETCH_CHARACTER_REQUEST,
  payload: id,
});

export const closeErrorPopUp = () => ({
  type: ActionsType.CLOSE_ERROR_POP_UP
})