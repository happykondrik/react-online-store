function Header(props) {
    return (
        <header>
            <div className="headerLeft">
                <img width={40} height={40} src="/img/logo.svg" alt="Logotype" />
                <div>
                    <h3>React Online Store</h3>
                    <p>Best computers store</p>
                </div>
            </div>

            <ul className="headerRight">
                <li onClick={props.onClickCart} className="cart">
                    <img width={18} height={18} src="/img/cart.svg" alt="Cart" />
                    <span>$ 199</span>
                </li>
                <li className="favorite">
                    <img width={18} height={18} src="/img/favorite.svg" alt="Favorite" />
                </li>
                <li className="user">
                    <img width={18} height={18} src="/img/user.svg" alt="User" />
                </li>
            </ul>
        </header>
    )
}

export default Header;