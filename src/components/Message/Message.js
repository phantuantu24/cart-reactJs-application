import React, { Component } from 'react';
import './Message.css';

class Message extends Component {
  render() {
    return (
      <div>
        <h3>
          <span className="badge amber darken-2">Mua Hàng Thành Công !</span>
        </h3>
      </div>
    );
  }
}

export default Message;