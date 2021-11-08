import { all } from "@redux-saga/core/effects";
import { fetchCharacterWatcher  } from "./characterSaga";
import { fetchCharactersWatcher } from "./charactersSaga";

export function* rootSaga() {
  yield all([fetchCharactersWatcher(), fetchCharacterWatcher()]);
}
