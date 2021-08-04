import React from 'react';
import styles from './Card.module.scss';

function Card({ onFavorite, onPlus, id, imageUrl, title, price, favorited = false, added = false }) {
    const [isAdded, setIsAdded] = React.useState(added);
    const [isFavorite, setIsFavorite] = React.useState(favorited);

    const onClickPlus = () => {
        onPlus({ id, imageUrl, title, price });
        setIsAdded(!isAdded);
    }

    const onClickFavorite = (obj) => {
        console.log(obj.id, obj.imageUrl, obj.title, obj.price);
        onFavorite({ id, imageUrl, title, price });
        setIsFavorite(!isFavorite);
    }

    console.log(id)
    return (
        <div className={styles.card}>
            <div className={styles.cardItems}>
                <div className={styles.favorite} onClick={onClickFavorite}>
                    <img src={isFavorite ? '/img/heart-liked.svg' : '/img/heart-unliked.svg'} alt="Unliked" />
                </div>
                <img width={140} height={120} src={imageUrl} alt="Computers" />
                <h5>{title}</h5>
                <div className={styles.cardBottom}>
                    <div className={styles.price}>
                        <span>Price:</span>
                        <b>$ {price}</b>
                    </div>
                    <img className={styles.plus} onClick={onClickPlus} src={isAdded ? '/img/button-checked.svg' : '/img/button-plus.svg'} alt="Plus" />
                </div>
            </div>
        </div>
    );
}

export default Card;


