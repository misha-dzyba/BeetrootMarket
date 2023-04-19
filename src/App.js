import React from "react"
import "./App.css"
import Favorites from "./pages/Favorites"
import Drawer from "./Drawer"
import Header from "./Header"
import axios from "axios"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import Home from "./pages/Home"

function App() {
  const [products, setProducts] = React.useState([])
  const [cartOpen, setCartOpen] = React.useState(false)
  const [cartProducts, setCartProducts] = React.useState([])
  const [searchValue, setSearchValue] = React.useState("")
  const [favorite, setFavorite] = React.useState([])

  React.useEffect( () => {

    async function fetchData() {

      const cartResponse = await axios.get("https://630f28a9379256341888e587.mockapi.io/cart")
      const favoriteResponse = await axios.get("https://630f28a9379256341888e587.mockapi.io/favorite")
      const productsResponse = await axios.get("https://630f28a9379256341888e587.mockapi.io/products")
      
      setCartProducts(cartResponse.data)
      setFavorite(favoriteResponse.data)
      setProducts(productsResponse.data)
      

    }

    fetchData()

  }, [])



const addFavorite = async (item) => {

  if (favorite.find((favObj) => favObj.id === item.id)) {

    axios.delete(`https://630f28a9379256341888e587.mockapi.io/favorite/${item.id}`)
    
    
  } else {

    const {data} = await axios.post('https://630f28a9379256341888e587.mockapi.io/favorite', item)
    setFavorite((prev) => [ ...prev, data])

  }
}

const itemAddedCart = (item) => {

  if ( cartProducts.find ( (obj) => Number (obj.id) === Number (item.id) ) ) {

    axios.delete(`https://630f28a9379256341888e587.mockapi.io/cart/${item.id}`)
    setCartProducts ( prev => prev.filter ( objj => Number ( objj.id ) !== Number ( item.id ) ) )

  } else {

    axios.post ( 'https://630f28a9379256341888e587.mockapi.io/cart', item )
    setCartProducts ( (prev) => [ ...prev, item ] )
  }
}

const onRemoveItem = (id) => {
  axios.delete(`https://630f28a9379256341888e587.mockapi.io/cart/${id}`)
    setCartProducts((prev) => prev.filter((item) => item.id !== id))
}

const changeValueSearch = (event) => {
    setSearchValue(event.target.value)
  }



  return (
    <div className="wrapper">
      <div className="wrapper-top">
        <div className="wrapper-case">
          <Header
            changeValueSearch={changeValueSearch}
            clickCart={() => setCartOpen(true)}
          />
        </div>
      </div>

      <div className="wrapper-bottom">

        

        {cartOpen ? (
          <Drawer
            products={cartProducts}
            clickClose={() => setCartOpen(false)}
            onRemove={onRemoveItem}
          />
        ) : null}
        <Routes>
          <Route path="/" element={<Home 
                                  cartProducts={cartProducts}
                                  addFavorite={addFavorite} 
                                  itemAddedCart={itemAddedCart} 
                                  searchValue={searchValue} 
                                  products={products} />}
                                   />
          <Route path="/favorites" element={<Favorites products={favorite} addFavorite={addFavorite}  />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
