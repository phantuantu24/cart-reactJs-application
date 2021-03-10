import React, { Component } from 'react'
import Cart from './components/Cart/Cart'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Message from './components/Message/Message'
import ProductList from './components/ProductList/ProductList'
export class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <main id="mainContainer">
          <div className="container">
            <ProductList />
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
