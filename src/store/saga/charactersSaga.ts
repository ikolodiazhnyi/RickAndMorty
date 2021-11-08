import { put, takeEvery, call } from "redux-saga/effects";
import { charactersAPI } from "../../api/api";
import { fetchCharactersFailed, setCharacters } from "../actions/actions";
import { ActionsType, ArrayOfCharacters, FetchCharactersType } from "../../types/types";

export function* fetchCharacters(action: FetchCharactersType) {
  try {
    const data: ArrayOfCharacters = yield call(charactersAPI.getCharacters, action.payload);
    yield put(setCharacters(data));
  } catch (e:any) {
    yield put(fetchCharactersFailed(e.message))
  }
}

export function* fetchCharactersWatcher() {
  yield takeEvery(ActionsType.FETCH_CHARACTERS_REQUEST, fetchCharacters);
}
