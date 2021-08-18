import React from 'react';
import ContentLoader from "react-content-loader"
import styles from './Card.module.scss';
import AppContext from '../../context';

function Card({
    onFavorite,
    onPlus,
    id,
    imageUrl,
    title,
    price,
    favorited = false,
    added = false,
    loading = false }) {
    const { isItemAdded } = React.useContext(AppContext);
    // const [isAdded, setIsAdded] = React.useState(added);
    const [isFavorite, setIsFavorite] = React.useState(favorited);

    const onClickPlus = () => {
        onPlus({ id, imageUrl, title, price });
        // setIsAdded(!isAdded); 
    }

    const onClickFavorite = (obj) => {
        console.log(obj.id, obj.imageUrl, obj.title, obj.price);
        onFavorite({ id, imageUrl, title, price });
        setIsFavorite(!isFavorite);
    }

    console.log(id)
    return (
        <div className={styles.card}>

            {
                loading ? <ContentLoader
                    speed={2}
                    width={210}
                    height={313}
                    viewBox="0 0 210 313"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb"
                >
                    <rect x="30" y="30" rx="10" ry="10" width="150" height="155" />
                    <rect x="30" y="193" rx="5" ry="5" width="150" height="15" />
                    <rect x="30" y="224" rx="5" ry="5" width="100" height="15" />
                    <rect x="148" y="251" rx="5" ry="5" width="32" height="32" />
                    <rect x="30" y="251" rx="5" ry="5" width="40" height="32" />
                </ContentLoader> : <div className={styles.cardItems}>
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
                        <img
                            className={styles.plus}
                            onClick={onClickPlus}
                            src={isItemAdded(id) ? '/img/button-checked.svg' : '/img/button-plus.svg'}
                            alt="Plus" />
                    </div>
                </div>

            }


        </div>
    );
}

export default Card;


