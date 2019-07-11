import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./button.scss";

function Button(props) {
  const { children, type, onClick, big, small, remove } = props;

  const className = classNames({
    button: true,
    small: small,
    big: big,
    remove: remove
  });

  return (
    <button
      className={className}
      type={type}
      big={big}
      small={small}
      remove={remove}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  onClick: PropTypes.func.isRequired,
  big: PropTypes.bool.isRequired,
  small: PropTypes.bool.isRequired
};

Button.defaultProps = {
  type: "button"
};

export default Button;
