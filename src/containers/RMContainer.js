import React, {useState, useEffect} from 'react';
import CharacterList from "../components/CharacterList";
import CharacterDetails from '../components/CharacterDetails';

const RMContainer = ({types}) => {

    const [items, setItems] = useState([]);
    const [item, setItem] = useState(null);

    useEffect(() => {
      getData(types[0].url);
    }, [types]);

    const getData= (url) => {
        fetch(url)
        .then(res => res.json())
        .then(items => setItems(items.results))
        .catch(err => console.error);
    };

    const onItemSelected = (item) => {
        setItem(item);
    };

    const handleSelectChange = event => {
        getData(event.target.value);
    };

    return (
        <div class="container">
            <CharacterList items={items} onItemSelected={onItemSelected} handleSelectChange={handleSelectChange} types={types}
            />
            <CharacterDetails item={item}/>
        </div>
    )
}

export default RMContainer;