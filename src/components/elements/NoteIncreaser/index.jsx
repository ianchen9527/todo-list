import React from "react";
import PropTypes from "prop-types";
import styles from "./index.module.scss";
import Button from "../Button";

const NoteIncreaser = (props) => {
  return <div className={styles['wrapper']}>
    <Button {...props} text="New Note" icon="add" />
    </div>;
};

NoteIncreaser.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
};

NoteIncreaser.defaultProps = {
  onClick: null,
  diabled: false,
  loading: false,
};

export default NoteIncreaser;
