function Header() {
    return (
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
    )
}

export default Header;