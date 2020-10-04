import routes from "../../../constants/routes";
import { state, getNote, getLoading, getOnEditClick } from "./index";

describe("noteViewer", () => {
  let mockNoteViewer, mockStore;

  describe("state", () => {
    beforeEach(() => {
      mockNoteViewer = "mockNoteViewer";
      mockStore = { containers: { noteViewer: mockNoteViewer } };
    });

    it("should return state.containers.noteViewer", () => {
      expect(state(mockStore)).toBe(mockNoteViewer);
    });
  });

  describe("getNote", () => {
    let notesFromResponse, match;
    beforeEach(() => {
      notesFromResponse = [
        { id: 1, title: "title 1", content: "content 1" },
        { id: 2, title: "title 2", content: "content 2" },
        { id: 3, title: "title 3", content: "content 3" },
      ];
      match = { params: { id: 2 } };
    });

    it("should return notes including id and title", () => {
      expect(getNote.resultFunc(notesFromResponse)(match)).toEqual(
        notesFromResponse[1]
      );
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

  describe("getOnEditClick", () => {
    let history, match;
    beforeEach(() => {
      history = { push: jest.fn() };
      match = { params: { id: 1 } };
      getOnEditClick(history, match)();
    });

    afterEach(() => {
      history.push.mockClear();
    });

    it("should push to edit page", () => {
      expect(history.push).toHaveBeenCalledWith(
        routes.NOTE_EDIT(match.params.id)
      );
    });
  });
});
