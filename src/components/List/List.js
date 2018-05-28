import React from 'react';
import Aux from '../../HOCs/Aux/Aux';
import './List.css';

const List = props => {
  const { places, query, selectPlace } = props;

  return (
    <Aux>
      <div className="search_bar">
        <input
          type="text"
          aria-label="Filter Input"
          placeholder="Filter Places"
          onChange={event => query(event.target.value)}
        />
      </div>
      <div className="search_results">
        <ul>
          {places.map(place => (
            <li
              tabIndex="0"
              aria-label={place.name}
              key={place.id}
              className="place_list"
              onClick={() => selectPlace(place.id)}>
              <span className="place_name">{place.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </Aux>
  );
};

export default List;

/*onChange={event => query(event.target.value)}*/
/*onClick={() => selectPlace(place.id)}*/
