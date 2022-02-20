import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Cart = (props) => {
  const totalPrice = props.cart.reduce(
    (total, item) => (total += item.price),
    0,
  )
  console.log(props.cart.price)

  return (
    <div>
      <h2>
        <Link to="/">Kitap Listesi</Link> <span>Sepetim</span>
      </h2>

      <h3>Toplam Sepet Tutarı: &#8378;{totalPrice.toFixed(2)}</h3>
      {props.cart.map((cart, key) => (
        <div key={key} className="book">
          <img src={cart.image} alt="Simyacı" />
          <div>
            <h4>Simyaci</h4>
            <p>Yazar: {cart.author}</p>
            <p>Fiyat: &#8378;{cart.price}</p>
            <p>Sepetinizde bu kitaptan toplam 1 adet var.</p>
            <button>-</button>
            <button>Sepetten Çıkar</button>
            <button>+</button>
          </div>
        </div>
      ))}
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  }
}

export default connect(mapStateToProps)(Cart)
