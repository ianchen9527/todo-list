import { testSaga } from "redux-saga-test-plan";
import apis from "../../apis";
import { updateNotes } from "../../reducers/responses/notes";
import watcher, {
  ON_DID_MOUNT,
  onDidMount,
  getOnDidMount,
  sagaOnDidMount,
} from "./index";

describe("ON_DID_MOUNT", () => {
  it("should be the correct action type", () => {
    expect(ON_DID_MOUNT).toBe(`${__dirname}/index.js/ON_DID_MOUNT`);
  });
});

describe("onDidMount", () => {
  it("should be the correct action object", () => {
    expect(onDidMount).toEqual({ type: ON_DID_MOUNT });
  });
});

describe("getOnDidMount", () => {
  let dispatch;
  beforeEach(() => {
    dispatch = jest.fn();
    getOnDidMount()({ dispatch });
  });

  afterEach(() => {
    dispatch.mockClear();
  });

  it("should return a callback which dispatching ON_DID_MOUNT", () => {
    expect(dispatch).toHaveBeenCalledWith(onDidMount);
  });
});

describe("watcher", () => {
  it("should watch correspond action", () => {
    testSaga(watcher).next().takeEvery(ON_DID_MOUNT, sagaOnDidMount);
  });
});

describe("sagaOnDidMount", () => {
  let mockNotes;
  beforeEach(() => {
    mockNotes = "mockNotes";
  });

  it("should run correctly", () => {
    testSaga(sagaOnDidMount)
      .next()
      .call(apis.fetchNotes)
      .next(mockNotes)
      .put(updateNotes(mockNotes))
      .next()
      .isDone();
  });
});
