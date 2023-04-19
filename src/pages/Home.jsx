import React from "react"
import Card from "../Card"

function Home({addFavorite, itemAddedCart, searchValue, products, cartProducts}) {
    return (
        <div className="wrapper-case">
          <h2>
            {" "}
            {searchValue
              ? `Я шукаю: "${searchValue}"`
              : "Фрукты и овощи, ягоды"}{" "}
          </h2>


          <div className="wrapper-cards">
            {products
              .filter((product) => product.name.toLowerCase().includes(searchValue.toLowerCase()))
              .map((p, index) => (
                <Card
                  key={index}
                  name={p.name}
                  price={p.price}
                  timeDelivery={p.timeDelivery}
                  imgUrl={p.imgUrl}
                  onPlus={(item) => itemAddedCart(item)}
                  onFavorite={(item) => addFavorite(item)}
                  id={p.id}
                  added = {cartProducts.some ((obj) => Number(obj.id) === Number(p.id))}
                  {...p}
                />
              ))}
          </div>
        </div>
    )
}

export default Home