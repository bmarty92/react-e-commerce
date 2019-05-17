import * as React from 'react';

import "./button.scss";

class Button extends React.Component {
  constructor(props) {
    super(props);
    const children = this.props;
  }
  render() {
    return (
      <button className="button">{children}</button>
    )
  }
}

export default Button;