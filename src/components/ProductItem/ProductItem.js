import React, { Component } from 'react';
import './ProductItem.css';

class ProductItem extends Component {

  showRatingStar(rating) {
    // var ratingResult = []
    // for (let i = 1; i <= rating; i++) {
    //   ratingResult.push(<i className="fa fa-star"></i>)
    // }
    // for (let j = 1; j <= (5 - rating); j++) {
    //   ratingResult.push(<i className="fa fa-star-o"></i>)
    // }
    // return ratingResult
    var result = [];
    for (var i = 0; i < 5; i++) {
      if (rating != 0) {
        result.push(<i key={i} className="fa fa-star"></i>)
        rating--;
      } else {
        result.push(<i key={i} className="fa fa-star-o"></i>)
      }
    }
    return result
  }

  render() {
    const { product } = this.props
    return (
      <div className="col-lg-4 col-md-6 mb-r">
        <div className="card text-center card-cascade narrower">
          <div className="view overlay hm-white-slight z-depth-1">
            <img src={product.image}
              className="img-fluid" alt={product.name} />
            <a>
              <div className="mask waves-light waves-effect waves-light"></div>
            </a>
          </div>
          <div className="card-body">
            <h4 className="card-title">
              <strong>
                <a>{product.name}</a>
              </strong>
            </h4>
            <ul className="rating">
              <li>
                {this.showRatingStar(product.rating)}
              </li>
            </ul>
            <p className="card-text">{product.description}</p>
            <div className="card-footer">
              <span className="left">{product.price}$</span>
              <span className="right">
                <a className="btn-floating blue-gradient" data-toggle="tooltip" data-placement="top" title="" data-original-title="Add to Cart">
                  <i className="fa fa-shopping-cart"></i>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductItem;