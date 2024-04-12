import { ReactComponent as CharacterActiveIcon } from "../assets/tick-svgrepo-com.svg";
import "./character.css";

interface TCharacterProps {
  id?: number;
  selected?: boolean;
  thumbnailUrl?: string;
}

export default function Character(props: TCharacterProps) {
  const { thumbnailUrl, id, selected } = props;
  const selecetedClass = selected ? "active" : "";

  return (
    <div
      data-id={id}
      data-active={selected}
      className={`character ${selecetedClass}`}
    >
      <img className="character-img" src={thumbnailUrl} alt="" />
      {selected && (
        <div className="character-active-icon">
          <CharacterActiveIcon />
        </div>
      )}
    </div>
  );
}
