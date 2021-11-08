import { useSelector } from "react-redux";
import "./CharactersContainer.css";
import Character from "./CharacterName";
import {
  getCharacters,
  getErrorMessage,
} from "../../store/selectors/selectors";
import PopUpError from "../../shared/PopUp/PopUpError";
import { CharacterType } from "../../types/types";

export default function CharactersContainer() {
  const characters = useSelector(getCharacters);
  const error = useSelector(getErrorMessage);
  const styles = {
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    borderRadius: "12px"
  }

  const arrCharacters = characters.map((character: CharacterType) => (
    <div
      className="character"
      style={{ ...styles, backgroundImage: "url(" + character.image + ")" }}
      key={character.id}
    >
      <Character character={character} />
    </div>
  ));

  return (
    <div className={error ? "popUpWrapper" : "charactersWrapper"}>
      {error ? <PopUpError /> : arrCharacters}
    </div>
  );
}
