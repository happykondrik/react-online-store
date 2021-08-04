import Card from '../components/Card'

function Home({items, searchValue, setSearchValue, onChangeSearchInput, onAddToCart, onAddToFavorite, cartItems}) {
  return (
        <div className="content">
        <div className="search">
          <h1>{searchValue ? `Search by request: "${searchValue}"` : 'Computers catalog'}</h1>
          <div className="search-block">
            <img width={14} height={14} src="/img/search.svg" alt="Search" />
            {searchValue && <img onClick={() => setSearchValue('')} className="clearButton" src="/img/button-clear.svg" alt="Clear" />}
            <input onChange={onChangeSearchInput} value={searchValue} placeholder="Search..." />
          </div>
        </div>

        <div className="computers">
          {items.filter(item => item.title.toLowerCase().includes(searchValue)).map((item, index) => (
            <Card
              key={index}
              {...item}
              onFavorite={(obj) => onAddToFavorite(obj)}
              onPlus={(obj) => onAddToCart(obj)}
              added={cartItems.some(obj => Number(obj.id) === Number(item.id))}
            />
          ))}
        </div>
      </div>
    );
}

export default Home;