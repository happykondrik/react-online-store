function App() {
  return (
    <div className="wrapper">
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
            <span>102 usd</span>
          </li>
          <li className="user">
            <img width={18} height={18} src="/img/user.svg" />
          </li>
        </ul>
      </header>

      <div className="content">
        <h1>
          Computer catalog
        </h1>

        <div className="computers">

          <div className="card" >
            <img width={140} height={120} src="/img/computers/1.jpg" alt="Computers" />
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
