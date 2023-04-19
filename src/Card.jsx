import React from "react"




function Card({ id, onFavorite, imgUrl, name, timeDelivery, price, onPlus, favorites = false, added = false }) {
  const [add, setAdd] = React.useState(added)
  const [isFavorite, setIsFavorite] = React.useState(favorites)


  const addPlus = () => {
    onPlus({ id, imgUrl, name, timeDelivery, price })
    setAdd(!add)
  }


  const addFavorite = () => {
    onFavorite({id, name, price, imgUrl, timeDelivery})
    setIsFavorite(!isFavorite)
  }

  return (
    <div className="card">
      <div className="card-favorite" onClick={addFavorite}>
        <img src={isFavorite ? '/img/Frame 5-2.svg' : '/img/Frame 5.svg'}></img>
      </div>

      <img width={252} height={336} src={imgUrl} alt="" />
      <div className="card-price">
        <b>{price} грн</b>
      </div>
      <p className="card-p">{name}</p>

      <p>{timeDelivery}</p>

      <img
        className="card-plus"
        onClick={addPlus}
        src={add ? "/img/Frame 6.svg" : "/img/Vector 1.svg"}
      ></img>
    </div>
  );
}

export default Card;
