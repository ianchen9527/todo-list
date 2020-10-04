import mockApiCall from "./mockApiCall";
import ls from "local-storage";

export default (notes) => {
  ls.set("notes", notes);
  return mockApiCall(notes);
};
