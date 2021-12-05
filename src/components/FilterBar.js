import React from 'react';

const FilterBar = ({handleSelectChange, types}) =>{
  return (
    <div>
      <select onChange={handleSelectChange}>
        {types.map(type => {
          return <option key={type.name} value={type.url}>{type.name}</option>
        })}
      </select>
    </div>
  );
};

export default FilterBar;