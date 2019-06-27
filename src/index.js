import React from "react";

import "./styles.css";

class Button extends React.Component {
    render() {
      return (
          <button
            type={this.props.type}
            className={`button ripple + ${this.props.color} + ${this.props.size}`}
          >
            Submit
          </button>
      );
    }
  }
export default Button;