import './App.css';
import RMContainer from './containers/RMContainer';

function App() {
  const types = [
    {name: "characters", url: "https://rickandmortyapi.com/api/character"},
    {name: "locations", url: "https://rickandmortyapi.com/api/location"},
    {name: "episodes", url: "https://rickandmortyapi.com/api/episode"}
  ];
  return (
    <>
    <h1>Rick and Morty</h1>
    <RMContainer types={types} />
    </>
     
  );
}

export default App;
