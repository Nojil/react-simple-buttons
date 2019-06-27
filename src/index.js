import React from "react";

import "./styles.css";

class Button extends React.Component {
    render() {
      return (
          <button
            type={this.props.type}
            className={`button ripple + ${this.props.color} + ${this.props.size}`}
          >
            {this.props.text}
          </button>
      );
    }
  }
export default Button;