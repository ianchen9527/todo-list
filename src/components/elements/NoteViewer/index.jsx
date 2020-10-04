import React from "react";
import styles from "./index.module.scss";
import PropTypes from "prop-types";
import Button from "../Button";
import showdown from "showdown";

const renderLoadingView = () => <div className={styles["loading-view"]} />;

const getConverter = () => new showdown.Converter();

const renderViewer = (note, onEditClick) =>
  note.id && (
    <>
      <div className={styles["title"]}>{note.title}</div>
      <div
        className={styles["content"]}
        dangerouslySetInnerHTML={{__html: getConverter().makeHtml(note.content)}}
      />
      <div className={styles["edit-button-wrapper"]}>
        <Button onClick={onEditClick} text="Edit" icon="edit" />
      </div>
    </>
  );

const NoteViewer = ({ note, loading, onEditClick }) => {
  console.log(loading);
  return (
    <div className={styles["wrapper"]}>
      {loading ? renderLoadingView() : renderViewer(note, onEditClick)}
    </div>
  );
};

NoteViewer.propTypes = {
  note: PropTypes.shape({ title: PropTypes.string, id: PropTypes.number }),
  loading: PropTypes.bool,
  onEditClick: PropTypes.func,
};

NoteViewer.defaultProps = {
  note: {},
  loading: false,
  onEditClick: null,
};

export default NoteViewer;
