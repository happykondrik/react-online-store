function Card() {
    return (
        <div className="card">
            <div className="favorite">
                <img src="/img/heart-unliked.svg" alt="Unliked" />
            </div>
            <img width={140} height={120} src="/img/computers/1.png" alt="Computers" />
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
    );
}

export default Card;


