import styles from './Drawer.module.scss';

function Drawer({ onClose, onRemove, items = [] }) {
    return (

        <div className={styles.overlay}>
            <div className={styles.drawer}>
                <h2>
                    Cart<img onClick={onClose} className={styles.removeButton} src="/img/button-remove.svg" alt="Close" />
                </h2>

                {
                    items.length > 0 ?
                        <div>
                            <div className={styles.items}>
                                {items.map((obj) => (
                                    <div key={obj.id} className={styles.cartItem}>
                                    <div style={{ backgroundImage: `url(${obj.imageUrl})` }} className={styles.cartItemImg}></div>
                                        <div className={styles.cartItemText}>
                                            <p>{obj.title}</p>
                                            <b>$ {obj.price}</b>
                                        </div>
                                        <img onClick={() => onRemove(obj.id)} className={styles.removeButton} src="/img/button-remove.svg" alt="Remove" />
                                    </div>
                                ))}
                            </div>
                            <div className={styles.cartTotalBlock}>
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
                                <button className={styles.greenButton}>Сheckout <img src="/img/arrow.svg" alt="Arrow" /></button>
                            </div>
                        </div>
                        :
                        <div className={styles.cartEmpty}>
                            <img className={styles.cartEmptyImg} width={120} height={120} src="/img/empty-cart.jpg" alt="Cart empty"/>
                            <h2>Cart empty</h2>
                            <p className={styles.cartEmptyText}>Add at least one product to place an order.</p>
                            <button onClick={onClose} className={styles.greenButton} >
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
