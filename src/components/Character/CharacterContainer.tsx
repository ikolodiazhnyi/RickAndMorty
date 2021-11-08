import { useDispatch, useSelector } from "react-redux";
import CharacterProfile from "./CharacterProfile";
import { useParams } from "react-router";
import { CharacterType, useParamsType } from "../../types/types";
import { fetchCharacter } from "../../store/actions/actions";
import { getCharacter, getErrorMessage } from "../../store/selectors/selectors";
import { useEffect } from "react";
import PopUpError from "../../shared/PopUp/PopUpError";

export default function CharacterContainer() {
  const dispatch = useDispatch();
  const {id} = useParams<useParamsType>();
  useEffect(() => {
    dispatch(fetchCharacter(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const error = useSelector(getErrorMessage)

  const character: CharacterType = useSelector(getCharacter);

  return (
    <div className={error ? "popUpWrapper" : "characterWrapper"}>
     {error ? <PopUpError/> : <CharacterProfile character={character} />}
    </div>
  );
}
