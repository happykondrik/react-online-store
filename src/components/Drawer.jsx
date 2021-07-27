function Drawer() {
    return (

        <div style={{ display: "none" }} className="overlay">
            <div className="drawer">
                <h2>Cart<img className="removeButton" src="/img/button-remove.svg" alt="Remove" /></h2>

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

                <div className="cartTotalBlock">
                    <ul>
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
                    <button className="greenButton">Сheckout <img src="/img/arrow.svg" alt="Arrow" /></button>
                </div>
            </div>
        </div>
    );
}

export default Drawer;
