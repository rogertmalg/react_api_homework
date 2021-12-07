import React, {useState, useEffect} from 'react';
import ItemList from "../components/ItemList";
import ItemDetails from '../components/ItemDetails';

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
        .catch(err => console.error(err));
    };

    const onItemSelected = (item) => {
        setItem(item);
    };

    const handleSelectChange = event => {
        getData(event.target.value);
    };

    return (
        <div class="container">
            <ItemList items={items} onItemSelected={onItemSelected} handleSelectChange={handleSelectChange} types={types}
            />
            <ItemDetails item={item}/>
        </div>
    )
}

export default RMContainer;