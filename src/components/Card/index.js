import React from 'react';
import styles from './Card.module.scss';

function Card({onFavorite, onPlus, id, imageUrl, title, price, favorited = false}) {
    const [isAdded, setIsAdded] = React.useState(false);
    const [isFavorite, setIsFavorite] = React.useState(favorited);

    const onClickPlus = () => {
        onPlus({imageUrl, title, price});
        setIsAdded(!isAdded);
    }

    const onClickFavorite = () => {
        onFavorite({imageUrl, title, price, id});
        setIsFavorite(!isFavorite);
    }

    console.log(id)
    return (
        <div key={id} className={styles.card}>
            <div className={styles.favorite} onClick={onClickFavorite}>
                <img src={isFavorite ? '/img/heart-liked.svg':'/img/heart-unliked.svg'} alt="Unliked" />
            </div>
            <img width={140} height={120} src={imageUrl} alt="Computers" />
            <h5>{title}</h5>
            <div className={styles.cardBottom}>
                <div className={styles.price}>
                    <span>Price:</span>
                    <b>$ {price}</b>
                </div>
                <img className={styles.plus} onClick={onClickPlus} src={isAdded ? '/img/button-checked.svg':'/img/button-plus.svg'} alt="Plus" />
            </div>
        </div>
    );
}

export default Card;


