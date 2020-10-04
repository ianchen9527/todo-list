import reducer, { UPDATE_LOADING, updateLoading } from "./index";

describe("UPDATE_LOADING", () => {
  it("should be the correct action type", () => {
    expect(UPDATE_LOADING).toBe("containers/noteList/UPDATE_LOADING");
  });
});

describe("updateLoading", () => {
  let loading;
  beforeEach(() => {
    loading = "loading";
  });

  it("should be the correct action object", () => {
    expect(updateLoading(loading)).toEqual({ type: UPDATE_LOADING, payload: loading });
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

    describe("is undefined", () => {
      beforeEach(() => {
        state = 'state';
        action = { type: undefined };
      });

      it("should switch to default case", () => {
        expect(reducer(state, action)).toEqual(state);
      });
    });
  });
});
