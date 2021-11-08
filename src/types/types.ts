export enum ActionsType {
  SET_CHARACTERS = "SET-CHARACTERS",
  SET_CHARACTER = "SET-CHARACTER",
  FETCH_CHARACTERS_REQUEST = "FETCH-CHARACTERS-REQUEST",
  FETCH_CHARACTERS_REQUEST_FAILED = "FETCH-CHARACTERS-REQUEST-FAILED",
  FETCH_CHARACTER_REQUEST = "FETCH-CHARACTER-REQUEST",
  FETCH_CHARACTER_REQUEST_FAILED = "FETCH-CHARACTER-REQUEST-FAILED",
  CLOSE_ERROR_POP_UP = "CLOSE-ERROR-POP-UP",
}

export type useParamsType = {
  id: string
}

export type CharacterType = {
  id: string;
  gender: string;
  created: string;
  name: string;
  image: string;
  specious: string;
  status: string;
  episode: Array<string>;
};

export type ArrayOfCharacters = Array<CharacterType>;

export type SetCharactersType = {
  type: typeof ActionsType.SET_CHARACTERS;
  payload: ArrayOfCharacters;
};

export type SetCharacterType = {
  type: typeof ActionsType.SET_CHARACTER;
  payload: CharacterType;
};

export type FetchCharacterType = {
  type: ActionsType.FETCH_CHARACTER_REQUEST;
  payload: string;
};

export type FetchCharactersType = {
  type: ActionsType.FETCH_CHARACTERS_REQUEST;
  payload: number
};

export type PopUpActionsType = {
  type: ActionsType.FETCH_CHARACTERS_REQUEST_FAILED | ActionsType.CLOSE_ERROR_POP_UP,
  payload: string
};