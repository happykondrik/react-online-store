import styles from './Card.module.scss';

function Card(props) {
    return (
        <div className={styles.card}>
            <div className={styles.favorite}>
                <img src="/img/heart-unliked.svg" alt="Unliked" />
            </div>
            <img width={140} height={120} src={props.imageUrl} alt="Computers" />
            <h5>{props.title}</h5>
            <div className={styles.cardBottom}>
                <div className={styles.price}>
                    <span>Price:</span>
                    <b>$ {props.price}</b>
                </div>
                <button onClick={props.onClick}>
                    <img width={25} height={25} src="/img/plus.svg" alt="Plus" />
                </button>
            </div>
        </div>
    );
}

export default Card;


