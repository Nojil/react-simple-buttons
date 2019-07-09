import React from "react";

import "./css/styles.css";

class Button extends React.Component {
  render() {
    return (
      <button
        type={this.props.type}
        className={`${this.props.theme} + 
          button + 
          ${this.props.color} + 
          ${this.props.size}`}
      >
        {this.props.text}
      </button>
    );
  }
}
export default Button;