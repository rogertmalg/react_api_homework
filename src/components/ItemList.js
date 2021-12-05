import SingleItem from "./SingleItem";
import FilterBar from "./FilterBar";

const CharacterList = ({items, onItemSelected, handleSelectChange, types}) => {

    const listItems = items.map((item) => {
        return <SingleItem item={item} key={item.id} onItemSelected={onItemSelected}/>

    })
    

    return (
        <div id="characterList">
            <FilterBar handleSelectChange={handleSelectChange} types={types}/>
            <ul>
                {listItems}
            </ul>
        </div>
    )
}

export default CharacterList;