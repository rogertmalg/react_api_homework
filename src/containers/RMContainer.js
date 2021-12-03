import React, {useState, useEffect} from 'react';
import CharacterList from "../components/CharacterList";
import CharacterDetails from '../components/CharacterDetails';  

const RMContainer = () => {

    // const urls = {
    //     "characters": "https://rickandmortyapi.com/api/character",
    //     "locations": "https://rickandmortyapi.com/api/location",
    //     "episodes": "https://rickandmortyapi.com/api/episode"
    // };

    const [characters, setCharacters] = useState([]);
    const [character, setCharacter] = useState(null);

    useEffect(() => {
      getCharacters();
    }, []);

    const getCharacters = function(){
        fetch('https://rickandmortyapi.com/api/character')
        .then(res => res.json())
        .then(characters => setCharacters(characters.results))
    };

    const onCharacterSelected = (character) => {
        setCharacter(character);

    };

    return (
        <div class="container">
            <CharacterList characters={characters} onCharacterSelected={onCharacterSelected} />
            <CharacterDetails character={character}/>
        </div>
    )
}

export default RMContainer;