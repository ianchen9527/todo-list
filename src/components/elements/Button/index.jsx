import React from "react";
import styles from "./index.module.scss";
import PropTypes from "prop-types";
import cx from "classnames";

const getWrapperClassName = (disabled) =>
  cx({
    [styles["wrapper"]]: true,
    [styles["disabled"]]: disabled,
  });

const Button = ({ icon, loading, onClick, text, disabled }) => {
  return (
    <div className={getWrapperClassName(disabled)} onClick={onClick}>
      {icon && <div className={styles[`icon-${icon}`]} />}
      {text}
      {loading && <div className={styles["loading"]} />}
    </div>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  icon: PropTypes.string,
  text: PropTypes.string,
};

Button.defaultProps = {
  onClick: null,
  diabled: false,
  loading: false,
  icon: "add",
  text: "",
};

export default Button;
