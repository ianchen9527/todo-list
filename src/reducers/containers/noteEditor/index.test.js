import reducer, {
  UPDATE_LOADING,
  UPDATE_NOTE,
  updateLoading,
  updateNote,
} from "./index";

describe("UPDATE_LOADING", () => {
  it("should be the correct action type", () => {
    expect(UPDATE_LOADING).toBe("containers/noteEditor/UPDATE_LOADING");
  });
});

describe("UPDATE_NOTE", () => {
  it("should be the correct action type", () => {
    expect(UPDATE_NOTE).toBe("containers/noteEditor/UPDATE_NOTE");
  });
});

describe("updateLoading", () => {
  let loading;
  beforeEach(() => {
    loading = "loading";
  });

  it("should be the correct action object", () => {
    expect(updateLoading(loading)).toEqual({
      type: UPDATE_LOADING,
      payload: loading,
    });
  });
});

describe("updateNote", () => {
  let note;
  beforeEach(() => {
    note = "note";
  });

  it("should be the correct action object", () => {
    expect(updateNote(note)).toEqual({
      type: UPDATE_NOTE,
      payload: note,
    });
  });
});

describe("reducer", () => {
  describe("the action", () => {
    let action, state, payload;
    describe("is UPDATE_LOADING", () => {
      beforeEach(() => {
        state = [];
        payload = "payload";
        action = updateLoading(payload);
      });

      it("should switch to corresponding case", () => {
        expect(reducer(state, action)).toEqual({ loading: payload });
      });
    });

    describe("is UPDATE_NOTE", () => {
      beforeEach(() => {
        state = [];
        payload = "payload";
        action = updateNote(payload);
      });

      it("should switch to corresponding case", () => {
        expect(reducer(state, action)).toEqual({ note: payload });
      });
    });

    describe("is undefined", () => {
      beforeEach(() => {
        state = "state";
        action = { type: undefined };
      });

      it("should switch to default case", () => {
        expect(reducer(state, action)).toEqual(state);
      });
    });
  });
});
