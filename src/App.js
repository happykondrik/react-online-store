import React from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header/Header'
import Drawer from './components/Drawer/Drawer'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import AppContext from './context';

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const cartResponce = await axios.get('https://610130ce4e50960017c29c77.mockapi.io/cart');
      const favoriteResponce = await axios.get('https://610130ce4e50960017c29c77.mockapi.io/favorite');
      const itemsResponce = await axios.get('https://610130ce4e50960017c29c77.mockapi.io/items');

      setIsLoading(false);

      setCartItems(cartResponce.data);
      setFavorites(favoriteResponce.data);
      setItems(itemsResponce.data);
    }

    fetchData();
  }, []);

  const onAddToCart = async (obj) => {
    try {
      if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
        axios.delete(`https://610130ce4e50960017c29c77.mockapi.io/cart${obj.id}`);
        setCartItems((prev) => prev.filter(item => Number(item.id) !== Number(obj.id)));
      } else {
        const { data } = await axios.post('https://610130ce4e50960017c29c77.mockapi.io/cart', obj);
        setCartItems((prev) => [...prev, data]);
      }
    } catch (error) {
      alert('Failed to add to cart')
    }
  };

  const onRemoveItem = (id) => {
    axios.delete(`/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find((favorite) => Number(favorite.id) === Number(obj.id))) {
        axios.delete(`https://610130ce4e50960017c29c77.mockapi.io/favorite${obj.id}`);
        setFavorites((prev) => prev.filter(favorite => Number(favorite.id) !== Number(obj.id)));
      } else {
        const { data } = await axios.post('https://610130ce4e50960017c29c77.mockapi.io/favorite', obj);
        setFavorites((prev) => [...prev, data]);
      }
    } catch (error) {
      alert('Failed to add to favorites')
    }
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const isItemAdded = (id) => {
    return cartItems.some(obj => Number(obj.id) === Number(id))
  };

  return (
    <AppContext.Provider value={{items, cartItems, favorites, isItemAdded, onAddToFavorite }}>
      <div className="wrapper">
        {cartOpened && (<Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem} />)}

        <Header onClickCart={() => setCartOpened(true)} />

        <Route path="/" exact>
          <Home
            items={items}
            cartItems={cartItems}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            onChangeSearchInput={onChangeSearchInput}
            onAddToCart={onAddToCart}
            onAddToFavorite={onAddToFavorite}
            isLoading={isLoading}
          />
        </Route>

        <Route path="/favorites" exact>
          <Favorites />
        </Route>

      </div>
    </AppContext.Provider>
  );
}

export default App;
