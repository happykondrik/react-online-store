function Drawer({ onClose, onRemove, items = [] }) {
    return (

        <div className="overlay">
            <div className="drawer">
                <h2>
                    Cart<img onClick={onClose} className="removeButton" src="/img/button-remove.svg" alt="Close" />
                </h2>

                {
                    items.length > 0 ?
                        <div>
                            <div className="items">
                                {items.map((obj) => (
                                    <div className="cartItem">
                                        <div style={{ backgroundImage: `url(${obj.imageUrl})` }} className="cartItemImg"></div>
                                        <div className="cartItemText">
                                            <p>{obj.title}</p>
                                            <b>$ {obj.price}</b>
                                        </div>
                                        <img onClick={() => onRemove(obj.id)} className="removeButton" src="/img/button-remove.svg" alt="Remove" />
                                    </div>
                                ))}
                            </div>
                            <div className="cartTotalBlock">
                                <ul>
                                    <li>
                                        <span>Total:</span>
                                        <div></div>
                                        <b>$ 199.00</b>
                                    </li>
                                    <li>
                                        <span>Tax 5%:</span>
                                        <div></div>
                                        <b>$ 9.95</b>
                                    </li>
                                </ul>
                                <button className="greenButton">Сheckout <img src="/img/arrow.svg" alt="Arrow" /></button>
                            </div>
                        </div>
                        :
                        <div className="cartEmpty">
                            <img className="cartEmptyImg" width={120} height={120} src="/img/empty-cart.jpg" alt="Cart empty"/>
                            <h2>Cart empty</h2>
                            <p className="cartEmptyText">Add at least one product to place an order.</p>
                            <button onClick={onClose} className="greenButton" >
                                <img src="/img/arrow.svg" alt="Arrow" />
                                Return
                            </button>
                        </div>
                }


            </div>
        </div>
    );
}

export default Drawer;
