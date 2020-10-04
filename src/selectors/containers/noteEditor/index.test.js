import { updateNote } from "../../../reducers/containers/noteEditor";
import {
  state,
  getNote,
  getLoading,
  getOnTitleChange,
  getOnContentChange,
} from "./index";

describe("noteEditor", () => {
  let mockNoteEditor, mockStore;

  describe("state", () => {
    beforeEach(() => {
      mockNoteEditor = "mockNoteEditor";
      mockStore = { containers: { noteEditor: mockNoteEditor } };
    });

    it("should return state.containers.noteEditor", () => {
      expect(state(mockStore)).toBe(mockNoteEditor);
    });
  });

  describe("getNote", () => {
    let mockState, note;
    beforeEach(() => {
      note = "note";
      mockState = { note };
    });

    it("should return state.note", () => {
      expect(getNote.resultFunc(mockState)).toEqual(note);
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

  describe("getOnTitleChange", () => {
    let dispatch, note, title;
    beforeEach(() => {
      dispatch = jest.fn();
      note = { id: 1, title: "title", content: "content" };
      title = "new title";
      getOnTitleChange(dispatch, note)(title);
    });

    it("should dispatch correct action", () => {
      expect(dispatch).toHaveBeenCalledWith(updateNote({ ...note, title }));
    });
  });

  describe("getOnContentChange", () => {
    let dispatch, note, content;
    beforeEach(() => {
      dispatch = jest.fn();
      note = { id: 1, title: "title", content: "content" };
      content = "new content";
      getOnContentChange(dispatch, note)(content);
    });

    it("should dispatch correct action", () => {
      expect(dispatch).toHaveBeenCalledWith(updateNote({ ...note, content }));
    });
  });
});
