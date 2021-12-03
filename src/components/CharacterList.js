import CharacterItem from "./CharacterItem";

const CharacterList = ({characters, onCharacterSelected}) => {

    const characterItems = characters.map((character) => {
        return <CharacterItem character={character} key={character.id} onCharacterSelected={onCharacterSelected}/>

    })
    

    return (
        <div id="characterList">
            <h2>Characters</h2>
            <ul>
                {characterItems}
            </ul>
        </div>
    )
}

export default CharacterList;