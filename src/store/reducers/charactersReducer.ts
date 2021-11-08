import {
  ActionsType,
  ArrayOfCharacters,
  SetCharactersType,
} from "../../types/types";

const initialState = {
  characters: [] as ArrayOfCharacters,
};

const charactersReducer = (state = initialState, action: SetCharactersType) => {
  switch (action.type) {
    case ActionsType.SET_CHARACTERS:
      return {
        ...state,
        characters: [...state.characters, ...action.payload],
      };
    default:
      return state;
  }
};

export default charactersReducer;
