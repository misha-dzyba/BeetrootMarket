import React from "react"
import Card from "../Card"


function Favorites({addFavorite, itemAddedCart, searchValue, products}) {
    return (
        <div className="wrapper-case">
            <h2>Те, що мені сподобалось</h2>
            <div className="wrapper-cards">
            {products.map((p, index) => (
                <Card
                  key={index}
                  name={p.name}
                  price={p.price}
                  timeDelivery={p.timeDelivery}
                  imgUrl={p.imgUrl}
                  onPlus={(item) => itemAddedCart(item)}
                  onFavorite={(item) => addFavorite(item)}
                  favorites={true}
                  id={p.id}
                />
              ))}
          </div>
        </div>
    )
}

export default Favorites