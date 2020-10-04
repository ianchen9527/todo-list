import { testSaga } from "redux-saga-test-plan";
import apis from "../../apis";
import { updateNotes } from "../../reducers/responses/notes";
import routes from "../../constants/routes";
import { updateLoading } from "../../reducers/containers/noteIncreaser";
import watcher, { ON_CLICK, onClick, sagaOnClick } from "./index";

describe("ON_CLICK", () => {
  it("should be the correct action type", () => {
    expect(ON_CLICK).toBe("noteIncreaser/ON_CLICK");
  });
});

describe("onClick", () => {
  let history;
  beforeEach(() => {
    history = "history";
  });

  it("should return a callback which dispatching ON_DID_MOUNT", () => {
    expect(onClick(history)).toEqual({ type: ON_CLICK, payload: { history } });
  });
});

describe("watcher", () => {
  it("should watch correspond action", () => {
    testSaga(watcher).next().takeEvery(ON_CLICK, sagaOnClick).next().isDone();
  });
});

describe("sagaOnClick", () => {
  let mockNotes, mockNote, action;
  beforeEach(() => {
    mockNotes = "mockNotes";
    mockNote = { id: 1 };
    action = {
      payload: {
        history: { push: jest.fn() },
      },
    };
  });

  it("should run correctly", () => {
    testSaga(sagaOnClick, action)
      .next()
      .put(updateLoading(true))
      .next()
      .call(apis.addNote)
      .next(mockNote)
      .call(apis.fetchNotes)
      .next(mockNotes)
      .put(updateNotes(mockNotes))
      .next()
      .put(updateLoading(false))
      .next()
      .call(action.payload.history.push, routes.NOTE_EDIT(mockNote.id))
      .next()
      .isDone();
  });
});
