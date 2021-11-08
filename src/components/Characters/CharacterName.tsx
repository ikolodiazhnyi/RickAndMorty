import { NavLink } from "react-router-dom";
import { CharacterType } from "../../types/types";
import "./CharactersContainer.css"

type CharacterProps = {
  character: CharacterType;
};

function CharacterName({ character }: CharacterProps) {
  return (
    <div className="characterInfo" >
      <NavLink to={`/${character.id}`}><div className="textWrapper"><p>{character.name}</p></div></NavLink>
    </div>
  );
}

export default CharacterName;
