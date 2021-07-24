function App() {
  return (
    <div className="wrapper">
      <div className="overlay">
        <div className="drawer">
          <h2>Cart</h2>

          <div className="items">

            <div className="cartItem">
              <div style={{ backgroundImage: 'url(/img/computers/1.png)' }} className="cartItemImg"></div>
              <div className="cartItemText">
                <p>MacBook Air 13-inch</p>
                <b>199 usd</b>
              </div>
              <img className="removeButton" src="/img/button-remove.svg" alt="Remove" />
            </div>

            <div className="cartItem">
              <div style={{ backgroundImage: 'url(/img/computers/1.png)' }} className="cartItemImg"></div>
              <div className="cartItemText">
                <p>MacBook Air 13-inch</p>
                <b>199 usd</b>
              </div>
              <img className="removeButton" src="/img/button-remove.svg" alt="Remove" />
            </div>

          </div>

          <ul className="cartTotalBlock">
            <li>
              <span>Total:</span>
              <div></div>
              <b>199.00 usd</b>
            </li>
            <li>
              <span>Tax 5%:</span>
              <div></div>
              <b>9.95 usd</b>
            </li>
          </ul>

        </div>
      </div>

      <header>
        <div className="headerLeft">
          <img width={40} height={40} src="/img/logo.svg" />
          <div>
            <h3>React Online Store</h3>
            <p>Best computers store</p>
          </div>
        </div>

        <ul className="headerRight">
          <li className="cart">
            <img width={18} height={18} src="/img/cart.svg" />
            <span>199 usd</span>
          </li>
          <li className="user">
            <img width={18} height={18} src="/img/user.svg" />
          </li>
        </ul>
      </header>

      <div className="content">
        <div className="search">
          <h1>Computer catalog</h1>
          <div className="search-block">
            <img width={14} height={14} src="/img/search.svg" alt="Search" />
            <input placeholder="Search..." />
          </div>
        </div>

        <div className="computers">

          <div className="card">
            <div className="favorite">
              <img src="/img/heart-unliked.svg" alt="Unliked" />
            </div>
            <img width={140} height={120} src="/img/computers/1.png" alt="Computers" />
            <h5> MacBook Air 13-inch</h5>
            <div className="cardBottom">
              <div className="price">
                <span>Price:</span>
                <b>199 usd</b>
              </div>
              <button>
                <img width={25} height={25} src="/img/plus.svg" alt="Plus" />
              </button>
            </div>
          </div>

          <div className="card" >
            <img width={140} height={120} src="/img/computers/1.jpg" alt="Computers" />
            <h5> MacBook Air 13-inch</h5>
            <div className="cardBottom">
              <div className="price">
                <span>Price:</span>
                <b>199 usd</b>
              </div>
              <button className="button">
                <img width={25} height={25} src="/img/plus.svg" alt="Plus" />
              </button>
            </div>
          </div>

          <div className="card" >
            <img width={140} height={120} src="/img/computers/1.jpg" alt="Computers" />
            <h5> MacBook Air 13-inch</h5>
            <div className="cardBottom">
              <div className="price">
                <span>Price:</span>
                <b>199 usd</b>
              </div>
              <button className="button">
                <img width={25} height={25} src="/img/plus.svg" alt="Plus" />
              </button>
            </div>
          </div>

          <div className="card" >
            <img width={140} height={120} src="/img/computers/1.jpg" alt="Computers" />
            <h5> MacBook Air 13-inch</h5>
            <div className="cardBottom">
              <div className="price">
                <span>Price:</span>
                <b>199 usd</b>
              </div>
              <button className="button">
                <img width={25} height={25} src="/img/plus.svg" alt="Plus" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
