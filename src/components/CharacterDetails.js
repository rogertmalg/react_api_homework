

const CharacterDetails = ({item}) => {

    if (!item) {
        return <h2>Select an item from the list</h2>
    }

    if (item.dimension) {
        return (
            <div id="itemDetails">
                <h2>{item.name}</h2>
                <p>Type: {item.type}</p>
                <p>Dimension: {item.dimension}</p>
            </div>
        )
    }

    if (item.air_date) {
        return (
            <div id="itemDetails">
                <h2>{item.name}</h2>
                <p>Air date: {item.air_date}</p>
                <p>Episode: {item.episode}</p>
            </div>
        )
    }
    return (
        <div id="itemDetails">
            <h2>{item.name}</h2>
            <img src={item.image} alt={item.name} />
            <br/>
            <p>Status: {item.status}</p>
            <p>Species: {item.species}</p>
            <p>Gender: {item.gender}</p>
            <p>Location: {item.location.name}</p>
        </div>
    )
}

export default CharacterDetails;