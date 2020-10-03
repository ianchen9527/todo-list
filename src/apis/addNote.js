import mockApiCall from "./mockApiCall";
import ls from "local-storage";

export default () => {
  let notes = ls.get("notes") || [];
  const note = { id: Date.now(), title: "New note", content: "" };
  notes.push(note);
  ls.set("notes", notes);
  return mockApiCall(note);
};
