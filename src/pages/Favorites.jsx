import Card from '../components/Card'

function Favorites({ items, onAddToFavorite }) {
  return (
    <div className="content">
      <div className="search">
        <h1>My favorites</h1>
      </div>

      <div className="computers">
        {items.map((item, index) => (
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