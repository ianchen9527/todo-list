import routes from "../../../constants/routes";
import { onClick } from "../../../sagas/noteIncreaser";
import { state, getDisabled, getLoading, getOnClick } from "./index";

describe("noteIncreaser", () => {
  let mockNoteIncreaser, mockStore;

  describe("state", () => {
    beforeEach(() => {
      mockNoteIncreaser = "mockNoteIncreaser";
      mockStore = { containers: { noteIncreaser: mockNoteIncreaser } };
    });

    it("should return state.containers.noteIncreaser", () => {
      expect(state(mockStore)).toBe(mockNoteIncreaser);
    });
  });

  describe("getDisabled", () => {
    let tmpLocation, match;
    beforeEach(() => {
      tmpLocation = window.location;
      match = { params: { id: 1 } };
    });

    afterEach(() => {
      window.location = tmpLocation;
    });

    describe("current page is routes.NOTE_EDIT", () => {
      beforeEach(() => {
        delete window.location;
        window.location = { pathname: routes.NOTE_EDIT(match.params.id) };
      });

      it("should return true", () => {
        expect(getDisabled(match)).toBeTruthy();
      });
    });

    describe("current page is not routes.NOTE_EDIT", () => {
      beforeEach(() => {
        delete window.location;
        window.location = { pathname: "whatever" };
      });

      it("should return false", () => {
        expect(getDisabled(match)).toBeFalsy();
      });
    });
  });

  describe("getLoading", () => {
    let mockState, loading;
    beforeEach(() => {
      loading = "loading";
      mockState = { loading };
    });

    it("should return state.loading", () => {
      expect(getLoading.resultFunc(mockState)).toEqual(loading);
    });
  });

  describe("getOnClick", () => {
    let dispatch, history, match, tmpLocation;
    beforeEach(() => {
      dispatch = jest.fn();
      history = "history";
      tmpLocation = window.location;
      match = { params: { id: 1 } };
      
    });

    afterEach(() => {
      dispatch.mockClear();
      window.location = tmpLocation;
    });

    describe("current page is routes.NOTE_EDIT", () => {
      beforeEach(() => {
        delete window.location;
        window.location = { pathname: routes.NOTE_EDIT(match.params.id) };
        getOnClick(dispatch, history, match)();
      });

      it("should not dispatch action", () => {
        expect(dispatch).not.toHaveBeenCalled();
      });
    });

    describe("current page is not routes.NOTE_EDIT", () => {
      beforeEach(() => {
        delete window.location;
        window.location = { pathname: "whatever" };
        getOnClick(dispatch, history, match)();
      });

      it("should dispatch action", () => {
        expect(dispatch).toHaveBeenCalledWith(onClick("history"));
      });
    });
  });
});
