import React from 'react';
import Card from '../components/Card'
import AppContext from '../context';

function Favorites() {

  const {favorites, onAddToFavorite} = React.useContext(AppContext);

  return (
    <div className="content">
      <div className="search">
        <h1>My favorites</h1>
      </div>

      <div className="computers">
        {favorites.map((item, index) => (
            <Card
              key={index}
              {...item}
              favorited={true}
              onFavorite={onAddToFavorite}
            />
          ))}
      </div>
    </div>
  );
}

export default Favorites;