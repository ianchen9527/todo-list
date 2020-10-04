import mockApiCall from "./mockApiCall";
import ls from "local-storage";

export default (id) => {
  const notes = ls.get("notes");
  const updatedNotes = [];
  notes.forEach((note) => {
    if (note.id !== id) {
      updatedNotes.push(note);
    }
  });
  ls.set("notes", updatedNotes);
  return mockApiCall();
};
