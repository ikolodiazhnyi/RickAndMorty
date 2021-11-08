import { combineReducers } from "redux";
import { characterReducer } from "./characterReducer";
import charactersReducer from "./charactersReducer";
import errorPopUpReducer from "./errorPopUpReducer";

const rootReducer = combineReducers({
  characters: charactersReducer,
  character: characterReducer,
  error: errorPopUpReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
