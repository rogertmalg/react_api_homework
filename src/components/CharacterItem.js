import CharacterList from "./CharacterList"

const CharacterItem = ({character, onCharacterSelected}) => {
    return (
        <li onClick={ () => {onCharacterSelected(character)}}>{character.name}</li>
    )
}

export default CharacterItem;