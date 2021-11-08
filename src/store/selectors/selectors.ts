import { RootState } from "../reducers/rootReducer";

export const getCharacters = (state: RootState) => state.characters.characters;
export const getCharacter = (state: RootState) => state.character;
export const getErrorMessage = (state: RootState) => state.error.message;
