import React from "react";
import styles from "./index.module.scss";
import NoteList from "../../../containers/NoteList";

const Notes = () => {
  return (
    <div className={styles["wrapper"]}>
      <div className={styles["increaser-wrapper"]} />
      <div className={styles["note-list-wrapper"]}>
        <NoteList />
      </div>
      <div className={styles["note-viewer-wrapper"]} />
    </div>
  );
};

export default Notes;
