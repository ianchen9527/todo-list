import mockApiCall from "./mockApiCall";
import ls from "local-storage";

export default () => mockApiCall(ls.get("notes") || []);
