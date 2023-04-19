import React from "react";

function Drawer({ clickClose, onRemove, products = [] }) {
  return (
    <div className="drawer-shadow">
      <div className="drawer">
        <img
          onClick={clickClose}
          className="drawer-icon" width={50}
          height={50}
          src="/img/Frame 10.svg"
        ></img>

        <h2>Кошик</h2>

        
        {products.length > 0 ? <div className="drawer-wrap">
              {products.map((p) => (
                <div className="drawer-items">
                  <img width={160} height={180} src={p.imgUrl}></img>
                  <img onClick={() => onRemove(p.id)} src="/img/Frame 10.svg"></img>
                  <p>{p.name}</p>
                  <b>{p.price + ' грн'}</b>
                </div>
              ))}
           </div> : <img width={250} height={250} src="/img/корзина пустая.svg"></img>}


    

      </div>
    </div>
  )
}

export default Drawer
