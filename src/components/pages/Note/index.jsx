import React from "react";
import styles from "./index.module.scss";
import NoteList from "../../../containers/NoteList";
import NoteIncreaser from "../../../containers/NoteIncreaser";
import NoteViewer from "../../../containers/NoteViewer";

const Note = () => {
  return (
    <div className={styles["wrapper"]}>
      <div className={styles["note-increaser-wrapper"]}>
        <NoteIncreaser />
      </div>
      <div className={styles["note-list-wrapper"]}>
        <NoteList />
      </div>
      <div className={styles["note-viewer-wrapper"]}>
        <NoteViewer />
      </div>
    </div>
  );
};

export default Note;
