import React from 'react';
import axios from 'axios';
import Card from './components/Card'
import Header from './components/Header'
import Drawer from './components/Drawer'

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    axios.get('https://610130ce4e50960017c29c77.mockapi.io/items').then(res => {
      setItems(res.data);
    });
    axios.get('https://610130ce4e50960017c29c77.mockapi.io/cart').then(res => {
      setCartItems(res.data);
    });
  }, []);

  const onAddToCart = (obj) => {
    axios.post('https://610130ce4e50960017c29c77.mockapi.io/cart', obj);
    setCartItems((prev) => [...prev, obj]);
  }

  const onRemoveFromCart = (id) => {
    axios.delete(`https://610130ce4e50960017c29c77.mockapi.io/cart${id}`);
    setCartItems((prev) => prev.filter(item => item.id != id));
  }

  const onAddToFavorite = (obj) => {
    axios.post('https://610130ce4e50960017c29c77.mockapi.io/favorite', obj);
    setFavorites((prev) => [...prev, obj]);
  }

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  }


  return (
    <div className="wrapper">
      {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveFromCart}/>}
      <Header onClickCart={() => setCartOpened(true)} />
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
          {items.filter(item => item.title.toLowerCase().includes(searchValue)).map((item) => (
            <Card
              id={item.id}
              title={item.title}
              price={item.price}
              imageUrl={item.imageUrl}
              onFavorite={(obj) => onAddToFavorite(obj)}
              onPlus={(obj) => onAddToCart(obj)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
