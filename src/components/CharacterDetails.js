

const CharacterDetails = ({character}) => {

    if (!character) {
        return <h2>Select a Character</h2>
    }
    return (
        <div id="characterDetails">
            <h2>{character.name}</h2>
            <img src={character.image} alt={character.name} />
            <br/>
            <p>Status: {character.status}</p>
            <p>Species: {character.species}</p>
            <p>Gender: {character.gender}</p>
            <p>Location: {character.location.name}</p>
        </div>
    )
}

export default CharacterDetails;