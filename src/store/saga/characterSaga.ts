import { call, put, takeLatest } from "@redux-saga/core/effects";
import { characterAPI } from "../../api/api";
import {
  ActionsType,
  CharacterType,
  FetchCharacterType,
} from "../../types/types";
import { fetchCharactersFailed, setCharacter } from "../actions/actions";

export function* fetchCharacterWorker(action: FetchCharacterType) {
try {
  const data: CharacterType = yield call(
    characterAPI.getCharacter,
    action.payload
  );
  yield put(setCharacter(data));
} catch (e:any) {
  yield put(fetchCharactersFailed(e.message))
}
  
}

export function* fetchCharacterWatcher() {
  yield takeLatest(ActionsType.FETCH_CHARACTER_REQUEST, fetchCharacterWorker);
}
