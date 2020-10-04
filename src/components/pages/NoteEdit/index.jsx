import React from "react";
import styles from "./index.module.scss";
import NoteList from "../../../containers/NoteList";
import NoteIncreaser from "../../../containers/NoteIncreaser";
import NoteEditor from "../../../containers/NoteEditor";

const NoteEdit = () => {
  return (
    <div className={styles["wrapper"]}>
      <div className={styles["note-increaser-wrapper"]}>
        <NoteIncreaser />
      </div>
      <div className={styles["note-list-wrapper"]}>
        <NoteList />
      </div>
      <div className={styles["note-editor-wrapper"]}>
        <NoteEditor />
      </div>
    </div>
  );
};

export default NoteEdit;
