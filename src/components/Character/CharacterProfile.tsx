import { ReactElement } from "react";
import { CharacterType } from "../../types/types";
import "./CharacterProfile.css";

type CharacterProps = {
  character: CharacterType ;
};

const CharacterProfile = ({ character }: CharacterProps): JSX.Element => {
  
  if (character.id === undefined) {
    return <div>Loading...</div>
  }


  const episodes: ReactElement[] = character.episode.map((episode:string) => (
    <li key={episode}>{episode}</li>
  ))


  return (
    <div className="characterProfileWrapper">
      <div className="infoName">{character.name}</div>
      <div className="infoImage"><img src={character.image} alt="Character's avatar"/></div>
      <div className="infoGender">{character.gender}</div>
      <div className="infoStatus">{character.status}</div>
      <div className="infoSpecious">{character.specious}</div>
      <div className="infoCreated">{character.created}</div>
      <div className="infoEpisodes">
        <ul >
        {episodes}
        </ul>
      </div>
    </div>
  );
};

export default CharacterProfile;
