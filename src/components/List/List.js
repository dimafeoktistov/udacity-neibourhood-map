import React from 'react';
import Aux from '../../HOCs/Aux/Aux';
import './List.css';

const List = props => {
  return (
    <Aux>
      <div className="search_bar">
        <input
          type="text"
          aria-label="Filter Input"
          placeholder="Filter Places"
        />
      </div>
      <div className="search_results">
        <ul>
          {props.places.map(place => (
            <li
              tabIndex="0"
              aria-label={place.name}
              key={place.id}
              className="place_list">
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
