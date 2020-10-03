import reducer, { UPDATE_NOTES, updateNotes } from "./index";

describe("UPDATE_NOTES", () => {
  it("should be the correct action type", () => {
    expect(UPDATE_NOTES).toBe(`${__dirname}/index.js/UPDATE_NOTES`);
  });
});

describe("updateNotes", () => {
  let notes;
  beforeEach(() => {
    notes = "notes";
  });

  it("should be the correct action object", () => {
    expect(updateNotes(notes)).toEqual({ type: UPDATE_NOTES, payload: notes });
  });
});

describe("reducer", () => {
  describe("the action", () => {
    let action, state, payload;
    describe("is UPDATE_NOTES", () => {
      beforeEach(() => {
        state = [];
        payload = "payload";
        action = updateNotes(payload);
      });

      it("should switch to corresponding case", () => {
        expect(reducer(state, action)).toEqual(payload);
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
