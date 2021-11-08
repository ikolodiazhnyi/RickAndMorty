import { ActionsType, CharacterType, SetCharacterType } from "../../types/types";

const initialState = {} as CharacterType;

export function characterReducer(
  state = initialState,
  action: SetCharacterType
) {
  switch (action.type) {
    case ActionsType.SET_CHARACTER:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}
