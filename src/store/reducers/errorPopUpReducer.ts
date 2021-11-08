import { ActionsType, PopUpActionsType } from "../../types/types";

const initialState = {
  message: "",
  showForm: false,
};

const errorPopUpReducer = (state = initialState, action: PopUpActionsType) => {
  switch (action.type) {
    case ActionsType.CLOSE_ERROR_POP_UP:
      return {
        ...state,
        showForm: !state.showForm,
        message: ""
      };
    case ActionsType.FETCH_CHARACTERS_REQUEST_FAILED:
      return {
        ...state,
        showForm: true,
        message: action.payload,
      }
    default:
      return state;
  }
};

export default errorPopUpReducer;
