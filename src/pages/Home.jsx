import React from 'react';
import Card from '../components/Card'

function Home({
  items,
  searchValue,
  setSearchValue,
  onChangeSearchInput,
  onAddToCart,
  onAddToFavorite,
  isLoading
}) {

  const renderItems = () => {
    const filteredItems = items.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase()), 
      );
    return (isLoading ? [...Array(12)] : filteredItems).map((item, index) => (
      <Card
        key={index}
        {...item}
        onFavorite={(obj) => onAddToFavorite(obj)}
        onPlus={(obj) => onAddToCart(obj)}
        // added={isItemAdded(item && item.id)}
        loading={isLoading}
      />
    ));
  };

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
        {renderItems()}
      </div>
    </div>
  );
}

export default Home;