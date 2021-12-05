

const SingleItem = ({item, onItemSelected}) => {
    return (
        <li onClick={ () => {onItemSelected(item)}}>{item.name}</li>
    )
}

export default SingleItem;