import React from 'react';
import Aux from '../../HOCs/Aux/Aux';
import './List.css';

const List = props => {
  const { places, query, listElementClicked } = props;

  return (
    <Aux>
      <h2>List of places</h2>
      <form role="search">
        <input
          type="search"
          aria-label="search text"
          placeholder="Filter Places"
          onChange={event => query(event.target.value)}
        />
      </form>
      <div className="search_results">
        <ul
          className="list-of-places"
          title="Places of interest"
          aria-label="Places of interest">
          {places.map(place => (
            <li
              tabIndex="0"
              aria-label={place.name}
              key={place.id}
              className="place_list"
              onClick={event => listElementClicked(event, place)}>
              <span className="place_name">{place.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </Aux>
  );
};

export default List;
