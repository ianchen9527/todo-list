import { testSaga } from "redux-saga-test-plan";
import apis from "../../apis";
import { updateNotes } from "../../reducers/responses/notes";
import {
  updateLoading,
  updateNote,
} from "../../reducers/containers/noteEditor";
import {
  sagaFetchNotes,
  sagaSaveNotes,
  sagaDeleteNote,
} from "../notesProcessor";
import { getNote } from "../../selectors/containers/noteEditor";
import routes from "../../constants/routes";
import watcher, {
  ON_DID_MOUNT,
  ON_CANCEL_CLICK,
  ON_SAVE_CLICK,
  ON_DELETE_CLICK,
  onDidMount,
  onCancelClick,
  onSaveClick,
  onDeleteClick,
  getOnDidMount,
  getOnCancelClick,
  getOnSaveClick,
  getOnDeleteClick,
  sagaOnDidMount,
  sagaOnCacncelClick,
  sagaOnSaveClick,
  sagaOnDeleteClick,
} from "./index";

describe("ON_DID_MOUNT", () => {
  it("should be the correct action type", () => {
    expect(ON_DID_MOUNT).toBe("noteEditor/ON_DID_MOUNT");
  });
});

describe("ON_CANCEL_CLICK", () => {
  it("should be the correct action type", () => {
    expect(ON_CANCEL_CLICK).toBe("noteEditor/ON_CANCEL_CLICK");
  });
});

describe("ON_SAVE_CLICK", () => {
  it("should be the correct action type", () => {
    expect(ON_SAVE_CLICK).toBe("noteEditor/ON_SAVE_CLICK");
  });
});

describe("ON_DELETE_CLICK", () => {
  it("should be the correct action type", () => {
    expect(ON_DELETE_CLICK).toBe("noteEditor/ON_DELETE_CLICK");
  });
});

describe("onDidMount", () => {
  let match;
  beforeEach(() => {
    match = "match";
  });

  it("should be the correct action object", () => {
    expect(onDidMount(match)).toEqual({
      type: ON_DID_MOUNT,
      payload: { match },
    });
  });
});

describe("onCancelClick", () => {
  let history;
  beforeEach(() => {
    history = "history";
  });

  it("should be the correct action object", () => {
    expect(onCancelClick(history)).toEqual({
      type: ON_CANCEL_CLICK,
      payload: { history },
    });
  });
});

describe("onSaveClick", () => {
  let history;
  beforeEach(() => {
    history = "history";
  });

  it("should be the correct action object", () => {
    expect(onSaveClick(history)).toEqual({
      type: ON_SAVE_CLICK,
      payload: { history },
    });
  });
});

describe("onDeleteClick", () => {
  let history;
  beforeEach(() => {
    history = "history";
  });

  it("should be the correct action object", () => {
    expect(onDeleteClick(history)).toEqual({
      type: ON_DELETE_CLICK,
      payload: { history },
    });
  });
});

describe("getOnDidMount", () => {
  let dispatch, match;
  beforeEach(() => {
    dispatch = jest.fn();
    match = "match";
    getOnDidMount()({ dispatch, match });
  });

  afterEach(() => {
    dispatch.mockClear();
  });

  it("should return a callback which dispatching ON_DID_MOUNT", () => {
    expect(dispatch).toHaveBeenCalledWith(onDidMount(match));
  });
});

describe("getOnCancelClick", () => {
  let dispatch, history;
  beforeEach(() => {
    dispatch = jest.fn();
    history = "history";
    getOnCancelClick(dispatch, history)();
  });

  afterEach(() => {
    dispatch.mockClear();
  });

  it("should return a callback which dispatching ON_CANCEL_CLICK", () => {
    expect(dispatch).toHaveBeenCalledWith(onCancelClick(history));
  });
});

describe("getOnSaveClick", () => {
  let dispatch, history;
  beforeEach(() => {
    dispatch = jest.fn();
    history = "history";
    getOnSaveClick(dispatch, history)();
  });

  afterEach(() => {
    dispatch.mockClear();
  });

  it("should return a callback which dispatching ON_SAVE_CLICK", () => {
    expect(dispatch).toHaveBeenCalledWith(onSaveClick(history));
  });
});

describe("getOnDeleteClick", () => {
  let dispatch, history;
  beforeEach(() => {
    dispatch = jest.fn();
    history = "history";
    getOnDeleteClick(dispatch, history)();
  });

  afterEach(() => {
    dispatch.mockClear();
  });

  it("should return a callback which dispatching ON_DELETE_CLICK", () => {
    expect(dispatch).toHaveBeenCalledWith(onDeleteClick(history));
  });
});

describe("watcher", () => {
  it("should watch correspond action", () => {
    testSaga(watcher)
      .next()
      .takeEvery(ON_DID_MOUNT, sagaOnDidMount)
      .next()
      .takeEvery(ON_CANCEL_CLICK, sagaOnCacncelClick)
      .next()
      .takeEvery(ON_SAVE_CLICK, sagaOnSaveClick)
      .next()
      .takeEvery(ON_DELETE_CLICK, sagaOnDeleteClick)
      .next()
      .isDone();
  });
});

describe("sagaOnDidMount", () => {
  let mockNotes, action;
  beforeEach(() => {
    mockNotes = [{ id: 1 }, { id: 2 }, { id: 3 }];
    action = {
      payload: {
        match: { params: { id: 2 } },
      },
    };
  });

  it("should run correctly", () => {
    testSaga(sagaOnDidMount, action)
      .next()
      .put(updateLoading(true))
      .next()
      .call(sagaFetchNotes)
      .next(mockNotes)
      .put(updateNotes(mockNotes))
      .next()
      .put(updateNote({ id: 2 }))
      .next()
      .put(updateLoading(false))
      .next()
      .isDone();
  });
});

describe("sagaOnCacncelClick", () => {
  let mockNote, action;
  beforeEach(() => {
    mockNote = { id: 1 };
    action = {
      payload: {
        history: { push: jest.fn() },
      },
    };
  });

  it("should run correctly", () => {
    testSaga(sagaOnCacncelClick, action)
      .next()
      .select(getNote)
      .next(mockNote)
      .put(updateNote({}))
      .next()
      .call(action.payload.history.push, routes.NOTE(mockNote.id))
      .next()
      .isDone();
  });
});

describe("sagaOnSaveClick", () => {
  let mockNote, action;
  beforeEach(() => {
    mockNote = { id: 1 };
    action = {
      payload: {
        history: { push: jest.fn() },
      },
    };
  });

  it("should run correctly", () => {
    testSaga(sagaOnSaveClick, action)
      .next()
      .put(updateLoading(true))
      .next()
      .select(getNote)
      .next(mockNote)
      .call(sagaSaveNotes, mockNote)
      .next()
      .put(updateLoading(false))
      .next()
      .call(action.payload.history.push, routes.NOTE(mockNote.id))
      .next()
      .isDone();
  });
});

describe("sagaOnDeleteClick", () => {
  let mockNote, action;
  beforeEach(() => {
    mockNote = { id: 1 };
    action = {
      payload: {
        history: { push: jest.fn() },
      },
    };
  });

  it("should run correctly", () => {
    testSaga(sagaOnDeleteClick, action)
      .next()
      .put(updateLoading(true))
      .next()
      .select(getNote)
      .next(mockNote)
      .call(sagaDeleteNote, mockNote.id)
      .next()
      .put(updateLoading(false))
      .next()
      .call(action.payload.history.push, routes.NOTES())
      .next()
      .isDone();
  });
});
