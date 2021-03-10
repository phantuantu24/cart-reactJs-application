import React, { Component } from 'react'
import Cart from './components/Cart/Cart'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Message from './components/Message/Message'
import ProductsContainer from './containers/ProductsContainer'
export class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <main id="mainContainer">
          <div className="container">
            <ProductsContainer />
            <Message />
            <Cart />
          </div>
        </main>
        <Footer />
      </div>
    )
  }
}

export default App
