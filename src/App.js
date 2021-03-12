import React, { Component } from 'react'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import CartContainer from './containers/CartContainer'
import MessageContainer from './containers/MessageContainer'
import ProductsContainer from './containers/ProductsContainer'
export class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <main id="mainContainer">
          <div className="container">
            <ProductsContainer />
            <MessageContainer />
            <CartContainer />
          </div>
        </main>
        <Footer />
      </div>
    )
  }
}

export default App
