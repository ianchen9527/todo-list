import routes from "../../../constants/routes";
import {
  state,
  getNotes,
  getDisabled,
  getLoading,
  getOnNoteClick,
} from "./index";

describe("noteList", () => {
  let mockNoteList, mockStore;

  describe("state", () => {
    beforeEach(() => {
      mockNoteList = "mockNoteList";
      mockStore = { containers: { noteList: mockNoteList } };
    });

    it("should return state.containers.noteList", () => {
      expect(state(mockStore)).toBe(mockNoteList);
    });
  });

  describe("getNotes", () => {
    let notesFromResponse, expectedNotes;
    beforeEach(() => {
      notesFromResponse = [
        { id: 1, title: "title 1", content: "content 1" },
        { id: 2, title: "title 2", content: "content 2" },
        { id: 3, title: "title 3", content: "content 3" },
      ];
      expectedNotes = [
        { id: 1, title: "title 1" },
        { id: 2, title: "title 2" },
        { id: 3, title: "title 3" },
      ];
    });

    it("should return notes including id and title", () => {
      expect(getNotes.resultFunc(notesFromResponse)).toEqual(expectedNotes);
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

  describe("getOnNoteClick", () => {
    let id, history, match, tmpLocation;
    beforeEach(() => {
      id = "id";
      history = { push: jest.fn() };
      tmpLocation = window.location;
      match = { params: { id: 1 } };
    });

    afterEach(() => {
      window.location = tmpLocation;
      history.push.mockClear();
    });

    describe("current page is routes.NOTE_EDIT", () => {
      beforeEach(() => {
        delete window.location;
        window.location = { pathname: routes.NOTE_EDIT(match.params.id) };
        getOnNoteClick(history, match)(id);
      });

      it("should not push", () => {
        expect(history.push).not.toHaveBeenCalled();
      });
    });

    describe("current page is not routes.NOTE_EDIT", () => {
      beforeEach(() => {
        delete window.location;
        window.location = { pathname: "whatever" };
        getOnNoteClick(history, match)(id);
      });

      it("should push", () => {
        expect(history.push).toHaveBeenCalledWith(routes.NOTE(id));
      });
    });
  });
});
